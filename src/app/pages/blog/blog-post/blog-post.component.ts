import { Component, DestroyRef, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { BlogService, BlogPostFull, BlogBlock } from '../../../services/blog.service';
import { ContentEditableModelDirective } from '../../../shared/directives/content-editable-model.directive';
import { AdminAuthService } from '../../../admin/services/admin-auth.service';
import { AdminApiService } from '../../../admin/services/admin-api.service';
import { ToastService, ToastComponent } from '../../../admin/components/toast/toast.component';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';

interface EditableBlock {
  type: string;
  content: string;
  metadata: Record<string, any>;
  orderIndex: number;
}

interface EditableTranslation {
  id?: number;
  languageId: number;
  languageCode?: string;
  title: string;
  description: string;
  isVisible: boolean;
  blocks: EditableBlock[];
}

interface FullPost {
  id: number;
  slug: string;
  coverImageUrl?: string;
  isPublished: boolean;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  translations?: EditableTranslation[];
}

interface Language {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
  isDefault: boolean;
}

interface EditorSnapshot {
  langId: number;
  title: string;
  description: string;
  blocks: EditableBlock[];
}

const MAX_UNDO = 50;

const BLOCK_TYPES = [
  { type: 'heading', label: 'Heading', icon: 'fa-heading' },
  { type: 'paragraph', label: 'Paragraph', icon: 'fa-paragraph' },
  { type: 'list', label: 'List', icon: 'fa-list' },
  { type: 'quote', label: 'Quote', icon: 'fa-quote-left' },
  { type: 'divider', label: 'Divider', icon: 'fa-minus' },
  { type: 'code', label: 'Code', icon: 'fa-code' },
  { type: 'image', label: 'Image', icon: 'fa-image' },
  { type: 'callout', label: 'Callout', icon: 'fa-circle-info' },
  { type: 'toggle', label: 'Toggle', icon: 'fa-caret-down' },
];

const CODE_LANGUAGES = [
  'typescript', 'javascript', 'python', 'java', 'csharp', 'go',
  'rust', 'html', 'css', 'scss', 'sql', 'bash', 'json', 'yaml', 'other',
];

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DragDropModule, ContentEditableModelDirective, ToastComponent, DateFormatPipe],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent implements OnInit, OnDestroy {
  // ─── Shared state ───
  loading = true;
  notFound = false;
  isAdmin = false;
  previewMode = false;

  // ─── Read-only (guest) ───
  post: BlogPostFull | null = null;
  title = '';
  description = '';
  blocks: BlogBlock[] = [];
  expandedToggles: Set<number> = new Set();

  // ─── Admin editing state ───
  fullPost: FullPost | null = null;
  languages: Language[] = [];
  activeLanguageId: number | null = null;
  translationMap: Record<number, EditableTranslation> = {};
  saving = false;
  showBlockPicker = false;
  blockPickerIndex = -1;
  showToolbar = true;

  blockTypes = BLOCK_TYPES;
  codeLanguages = CODE_LANGUAGES;

  // ─── Undo / Redo ───
  undoStack: EditorSnapshot[] = [];
  redoStack: EditorSnapshot[] = [];
  private lastAutoSnapshot = '';
  private autoSnapshotTimer: ReturnType<typeof setInterval> | null = null;

  private destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private authService: AdminAuthService,
    private adminApi: AdminApiService,
    private toast: ToastService,
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAuthenticated();
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      this.notFound = true;
      this.loading = false;
      return;
    }

    if (this.isAdmin) {
      this.loadLanguages();
      this.loadAdminPost(slug);
      this.autoSnapshotTimer = setInterval(() => this.autoSnapshot(), 2000);
    } else {
      this.loadPublicPost(slug);
    }
  }

  ngOnDestroy(): void {
    if (this.autoSnapshotTimer) {
      clearInterval(this.autoSnapshotTimer);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.isAdmin) return;
    if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
      if (event.shiftKey) {
        event.preventDefault();
        this.redo();
      } else {
        event.preventDefault();
        this.undo();
      }
    }
  }

  // ─── Public loading ───

  private loadPublicPost(slug: string): void {
    this.blogService.getPost(slug).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => {
        this.post = data;
        const t = data.translations?.[0];
        if (t) {
          this.title = t.title;
          this.description = t.description;
          this.blocks = (t.blocks || []).sort((a, b) => a.orderIndex - b.orderIndex);
        }
        this.loading = false;
      },
      error: () => {
        this.notFound = true;
        this.loading = false;
      },
    });
  }

  // ─── Admin loading ───

  private loadLanguages(): void {
    this.adminApi.get<Language[]>('/languages').subscribe({
      next: (data) => {
        this.languages = data.filter((l) => l.isActive);
        if (this.languages.length > 0 && !this.activeLanguageId) {
          this.activeLanguageId =
            this.languages.find((l) => l.isDefault)?.id || this.languages[0].id;
        }
      },
      error: () => this.toast.error('Failed to load languages'),
    });
  }

  private loadAdminPost(slug: string): void {
    this.adminApi.get<FullPost>(`/blog/admin/by-slug/${slug}`).subscribe({
      next: (data) => {
        this.fullPost = data;
        this.buildTranslationMap(data.translations || []);
        this.syncViewFromTranslation();
        this.loading = false;
        this.initAutoSnapshot();
      },
      error: () => {
        this.notFound = true;
        this.loading = false;
        this.toast.error('Failed to load post');
      },
    });
  }

  private buildTranslationMap(translations: EditableTranslation[]): void {
    this.translationMap = {};
    for (const lang of this.languages) {
      this.translationMap[lang.id] = {
        languageId: lang.id,
        title: '',
        description: '',
        isVisible: false,
        blocks: [],
      };
    }
    for (const t of translations) {
      this.translationMap[t.languageId] = {
        id: t.id,
        languageId: t.languageId,
        languageCode: t.languageCode,
        title: t.title || '',
        description: t.description || '',
        isVisible: t.isVisible,
        blocks: (t.blocks || []).map((b) => ({
          type: b.type,
          content: b.content || '',
          metadata: b.metadata || {},
          orderIndex: b.orderIndex,
        })),
      };
    }
  }

  private syncViewFromTranslation(): void {
    if (!this.activeLanguageId) return;
    const t = this.translationMap[this.activeLanguageId];
    if (t) {
      this.title = t.title;
      this.description = t.description;
      this.blocks = t.blocks as any;
    }
  }

  // ─── Admin: Language tabs ───

  get currentTranslation(): EditableTranslation | null {
    if (!this.activeLanguageId) return null;
    return this.translationMap[this.activeLanguageId] || null;
  }

  get currentBlocks(): EditableBlock[] {
    return this.currentTranslation?.blocks || [];
  }

  switchLanguage(langId: number): void {
    this.activeLanguageId = langId;
    this.syncViewFromTranslation();
    this.clearHistory();
  }

  getLanguageName(langId: number): string {
    return this.languages.find((l) => l.id === langId)?.name || '';
  }

  getLanguageCode(langId: number): string {
    return this.languages.find((l) => l.id === langId)?.code || '';
  }

  // ─── Admin: Save ───

  saveTranslation(): void {
    if (!this.fullPost || !this.activeLanguageId || this.saving) return;
    const t = this.translationMap[this.activeLanguageId];
    if (!t || !t.title) {
      this.toast.error('Title is required');
      return;
    }

    this.saving = true;
    const body = {
      title: t.title,
      description: t.description,
      isVisible: t.isVisible,
      blocks: t.blocks.map((b, i) => ({
        type: b.type,
        content: b.content,
        metadata: b.metadata,
        orderIndex: i,
      })),
    };

    this.adminApi
      .put<FullPost>(
        `/blog/admin/${this.fullPost.id}/translations/${this.activeLanguageId}`,
        body,
      )
      .subscribe({
        next: (updated) => {
          this.fullPost = updated;
          this.buildTranslationMap(updated.translations || []);
          this.syncViewFromTranslation();
          this.saving = false;
          this.toast.success('Translation saved');
        },
        error: () => {
          this.saving = false;
          this.toast.error('Failed to save translation');
        },
      });
  }

  saveMetadata(): void {
    if (!this.fullPost) return;
    this.adminApi
      .patch<FullPost>(`/blog/admin/${this.fullPost.id}`, {
        slug: this.fullPost.slug,
        coverImageUrl: this.fullPost.coverImageUrl || null,
        isPublished: this.fullPost.isPublished,
      })
      .subscribe({
        next: (updated) => {
          this.fullPost = updated;
          this.router.navigate(['/blog', updated.slug], { replaceUrl: true });
          this.toast.success('Metadata saved');
        },
        error: () => this.toast.error('Failed to save metadata'),
      });
  }

  togglePublish(): void {
    if (!this.fullPost) return;
    this.adminApi
      .patch<FullPost>(`/blog/admin/${this.fullPost.id}/publish`, {})
      .subscribe({
        next: (updated) => {
          if (this.fullPost) {
            this.fullPost.isPublished = updated.isPublished;
            this.fullPost.publishedAt = updated.publishedAt;
          }
          this.toast.success(updated.isPublished ? 'Published' : 'Unpublished');
        },
        error: () => this.toast.error('Failed to toggle publish'),
      });
  }

  // ─── Block editor ───

  addBlock(type: string, atIndex?: number): void {
    const t = this.currentTranslation;
    if (!t) return;
    this.pushSnapshot();

    const newBlock: EditableBlock = {
      type,
      content: '',
      metadata: this.getDefaultMetadata(type),
      orderIndex: 0,
    };

    const insertAt = atIndex !== undefined ? atIndex : t.blocks.length;
    t.blocks.splice(insertAt, 0, newBlock);
    this.reindexBlocks(t.blocks);
    this.closeBlockPicker();
  }

  removeBlock(index: number): void {
    const t = this.currentTranslation;
    if (!t) return;
    this.pushSnapshot();
    t.blocks.splice(index, 1);
    this.reindexBlocks(t.blocks);
  }

  duplicateBlock(index: number): void {
    const t = this.currentTranslation;
    if (!t) return;
    this.pushSnapshot();
    const copy: EditableBlock = JSON.parse(JSON.stringify(t.blocks[index]));
    t.blocks.splice(index + 1, 0, copy);
    this.reindexBlocks(t.blocks);
  }

  moveBlockUp(index: number): void {
    if (index <= 0) return;
    const t = this.currentTranslation;
    if (!t) return;
    this.pushSnapshot();
    [t.blocks[index - 1], t.blocks[index]] = [t.blocks[index], t.blocks[index - 1]];
    this.reindexBlocks(t.blocks);
  }

  moveBlockDown(index: number): void {
    const t = this.currentTranslation;
    if (!t || index >= t.blocks.length - 1) return;
    this.pushSnapshot();
    [t.blocks[index], t.blocks[index + 1]] = [t.blocks[index + 1], t.blocks[index]];
    this.reindexBlocks(t.blocks);
  }

  onBlockDrop(event: CdkDragDrop<EditableBlock[]>): void {
    const t = this.currentTranslation;
    if (!t) return;
    this.pushSnapshot();
    moveItemInArray(t.blocks, event.previousIndex, event.currentIndex);
    this.reindexBlocks(t.blocks);
  }

  openBlockPicker(atIndex: number): void {
    this.blockPickerIndex = atIndex;
    this.showBlockPicker = true;
  }

  closeBlockPicker(): void {
    this.showBlockPicker = false;
    this.blockPickerIndex = -1;
  }

  selectBlockType(type: string): void {
    this.addBlock(type, this.blockPickerIndex);
  }

  getBlockIcon(type: string): string {
    return BLOCK_TYPES.find((b) => b.type === type)?.icon || 'fa-cube';
  }

  getBlockLabel(type: string): string {
    return BLOCK_TYPES.find((b) => b.type === type)?.label || type;
  }

  trackByIndex(index: number): number {
    return index;
  }

  onCodeTab(event: Event): void {
    event.preventDefault();
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    range.deleteContents();
    const textNode = document.createTextNode('  ');
    range.insertNode(textNode);
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    sel.removeAllRanges();
    sel.addRange(range);
    (event.target as HTMLElement).dispatchEvent(new Event('input', { bubbles: true }));
  }

  // ─── Undo / Redo ───

  private captureState(): EditorSnapshot | null {
    if (!this.activeLanguageId || !this.currentTranslation) return null;
    return {
      langId: this.activeLanguageId,
      title: this.currentTranslation.title,
      description: this.currentTranslation.description,
      blocks: JSON.parse(JSON.stringify(this.currentTranslation.blocks)),
    };
  }

  pushSnapshot(): void {
    const snapshot = this.captureState();
    if (!snapshot) return;
    this.undoStack.push(snapshot);
    this.redoStack = [];
    if (this.undoStack.length > MAX_UNDO) this.undoStack.shift();
    this.lastAutoSnapshot = JSON.stringify(snapshot);
  }

  private autoSnapshot(): void {
    const snapshot = this.captureState();
    if (!snapshot) return;
    const json = JSON.stringify(snapshot);
    if (json !== this.lastAutoSnapshot && this.lastAutoSnapshot) {
      const prev: EditorSnapshot = JSON.parse(this.lastAutoSnapshot);
      this.undoStack.push(prev);
      this.redoStack = [];
      if (this.undoStack.length > MAX_UNDO) this.undoStack.shift();
    }
    this.lastAutoSnapshot = json;
  }

  private initAutoSnapshot(): void {
    const snapshot = this.captureState();
    if (snapshot) {
      this.lastAutoSnapshot = JSON.stringify(snapshot);
    }
  }

  private restoreState(snapshot: EditorSnapshot): void {
    if (!this.translationMap[snapshot.langId]) return;
    if (this.activeLanguageId !== snapshot.langId) {
      this.activeLanguageId = snapshot.langId;
    }
    const t = this.translationMap[snapshot.langId];
    t.title = snapshot.title;
    t.description = snapshot.description;
    t.blocks = JSON.parse(JSON.stringify(snapshot.blocks));
    this.syncViewFromTranslation();
    this.lastAutoSnapshot = JSON.stringify(this.captureState());
  }

  undo(): void {
    if (this.undoStack.length === 0) return;
    const current = this.captureState();
    if (current) this.redoStack.push(current);
    const prev = this.undoStack.pop()!;
    this.restoreState(prev);
    this.toast.show('Undo', 'info');
  }

  redo(): void {
    if (this.redoStack.length === 0) return;
    const current = this.captureState();
    if (current) this.undoStack.push(current);
    const next = this.redoStack.pop()!;
    this.restoreState(next);
    this.toast.show('Redo', 'info');
  }

  private clearHistory(): void {
    this.undoStack = [];
    this.redoStack = [];
    this.initAutoSnapshot();
  }

  // ─── Preview mode ───

  togglePreview(): void {
    this.previewMode = !this.previewMode;
  }

  get previewBlocks(): EditableBlock[] {
    return this.currentBlocks;
  }

  get previewTitle(): string {
    return this.currentTranslation?.title || '';
  }

  get previewDescription(): string {
    return this.currentTranslation?.description || '';
  }

  // ─── Shared helpers ───

  getListItems(content: string | undefined): string[] {
    if (!content) return [];
    return content.split('\n').filter((line) => line.trim().length > 0);
  }

  toggleExpand(blockIndex: number): void {
    if (this.expandedToggles.has(blockIndex)) {
      this.expandedToggles.delete(blockIndex);
    } else {
      this.expandedToggles.add(blockIndex);
    }
  }

  isToggleExpanded(blockIndex: number): boolean {
    return this.expandedToggles.has(blockIndex);
  }

  private getDefaultMetadata(type: string): Record<string, any> {
    switch (type) {
      case 'heading': return { level: 2 };
      case 'list': return { style: 'unordered' };
      case 'code': return { language: 'typescript' };
      case 'image': return { url: '', caption: '' };
      case 'callout': return { type: 'info' };
      case 'toggle': return { summary: '' };
      default: return {};
    }
  }

  private reindexBlocks(blocks: EditableBlock[]): void {
    blocks.forEach((b, i) => (b.orderIndex = i));
  }
}
