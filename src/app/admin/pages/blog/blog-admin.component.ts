import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { AdminApiService } from '../../services/admin-api.service';
import { ContentEditableModelDirective } from '../../../shared/directives/content-editable-model.directive';
import { ToastService, ToastComponent } from '../../components/toast/toast.component';
import { ConfirmDialogService, ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

interface BlogBlock {
  type: string;
  content: string;
  metadata: Record<string, any>;
  orderIndex: number;
}

interface BlogTranslation {
  id?: number;
  languageId: number;
  languageCode?: string;
  title: string;
  description: string;
  isVisible: boolean;
  blocks: BlogBlock[];
}

interface BlogPost {
  id?: number;
  slug: string;
  coverImageUrl: string;
  isPublished: boolean;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  translations?: BlogTranslation[];
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
  blocks: BlogBlock[];
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
  selector: 'app-blog-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule, ContentEditableModelDirective, ToastComponent, ConfirmDialogComponent],
  templateUrl: './blog-admin.component.html',
  styleUrl: './blog-admin.component.scss',
})
export class BlogAdminComponent implements OnInit, OnDestroy {
  languages: Language[] = [];
  posts: BlogPost[] = [];

  selectedPost: BlogPost | null = null;
  isNewPost = false;

  // Post metadata form
  postForm: BlogPost = this.emptyPost();

  // Language tabs
  activeLanguageId: number | null = null;

  // Per-language translation data
  translationMap: Record<number, BlogTranslation> = {};

  // Block type picker
  blockTypes = BLOCK_TYPES;
  codeLanguages = CODE_LANGUAGES;
  showBlockPicker = false;
  blockPickerIndex = -1;

  // Undo / Redo
  undoStack: EditorSnapshot[] = [];
  redoStack: EditorSnapshot[] = [];
  private lastAutoSnapshot = '';
  private autoSnapshotTimer: ReturnType<typeof setInterval> | null = null;

  constructor(
    private api: AdminApiService,
    private toast: ToastService,
    private confirm: ConfirmDialogService,
  ) {}

  ngOnInit(): void {
    this.api.get<Language[]>('/languages').subscribe({
      next: (data) => {
        this.languages = data.filter((l) => l.isActive);
        if (this.languages.length > 0) {
          this.activeLanguageId =
            this.languages.find((l) => l.isDefault)?.id || this.languages[0].id;
        }
      },
    });
    this.loadPosts();
    this.autoSnapshotTimer = setInterval(() => this.autoSnapshot(), 2000);
  }

  ngOnDestroy(): void {
    if (this.autoSnapshotTimer) {
      clearInterval(this.autoSnapshotTimer);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
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

  loadPosts(): void {
    this.api.get<BlogPost[]>('/blog/admin/all').subscribe({
      next: (data) => (this.posts = data),
      error: () => this.toast.error('Failed to load blog posts'),
    });
  }

  // ─── Post selection ───

  selectPost(post: BlogPost): void {
    this.api.get<BlogPost>(`/blog/admin/${post.id}`).subscribe({
      next: (full) => {
        this.selectedPost = full;
        this.isNewPost = false;
        this.postForm = {
          id: full.id,
          slug: full.slug,
          coverImageUrl: full.coverImageUrl || '',
          isPublished: full.isPublished,
          publishedAt: full.publishedAt,
        };
        this.buildTranslationMap(full.translations || []);
        this.clearHistory();
      },
      error: () => this.toast.error('Failed to load post'),
    });
  }

  newPostMode(): void {
    this.selectedPost = null;
    this.isNewPost = true;
    this.postForm = this.emptyPost();
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
    if (this.languages.length > 0) {
      const defaultLang = this.languages.find((l) => l.isDefault) || this.languages[0];
      this.activeLanguageId = defaultLang.id;
      this.translationMap[defaultLang.id].isVisible = true;
    }
    this.clearHistory();
  }

  cancelEdit(): void {
    this.selectedPost = null;
    this.isNewPost = false;
    this.postForm = this.emptyPost();
    this.translationMap = {};
    this.clearHistory();
  }

  // ─── Save post ───

  async savePost(): Promise<void> {
    if (!this.postForm.slug) {
      this.toast.error('Slug is required');
      return;
    }

    const hasAnyTranslation = Object.values(this.translationMap).some(
      (t) => t.title && t.isVisible,
    );
    if (!hasAnyTranslation) {
      this.toast.error('At least one visible translation with a title is required');
      return;
    }

    if (this.isNewPost) {
      // Create new post with translations
      const translations = Object.values(this.translationMap)
        .filter((t) => t.title)
        .map((t) => ({
          languageId: t.languageId,
          title: t.title,
          description: t.description,
          isVisible: t.isVisible,
          blocks: t.blocks.map((b, i) => ({ ...b, orderIndex: i })),
        }));

      this.api
        .post<BlogPost>('/blog/admin', {
          slug: this.postForm.slug,
          coverImageUrl: this.postForm.coverImageUrl || null,
          isPublished: this.postForm.isPublished,
          translations,
        })
        .subscribe({
          next: (created) => {
            this.toast.success('Post created');
            this.loadPosts();
            this.selectPost(created);
          },
          error: () => this.toast.error('Failed to create post'),
        });
    } else {
      // Update metadata
      this.api
        .patch<BlogPost>(`/blog/admin/${this.postForm.id}`, {
          slug: this.postForm.slug,
          coverImageUrl: this.postForm.coverImageUrl || null,
          isPublished: this.postForm.isPublished,
        })
        .subscribe({
          next: () => {
            this.toast.success('Post metadata saved');
            this.loadPosts();
          },
          error: () => this.toast.error('Failed to update post'),
        });
    }
  }

  saveTranslation(langId: number): void {
    if (!this.postForm.id) {
      this.toast.error('Save the post first');
      return;
    }

    const t = this.translationMap[langId];
    if (!t) return;

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

    this.api
      .put<BlogPost>(`/blog/admin/${this.postForm.id}/translations/${langId}`, body)
      .subscribe({
        next: (updated) => {
          this.toast.success('Translation saved');
          this.buildTranslationMap(updated.translations || []);
          this.loadPosts();
        },
        error: () => this.toast.error('Failed to save translation'),
      });
  }

  async togglePublish(): Promise<void> {
    if (!this.postForm.id) return;
    this.api
      .patch<BlogPost>(`/blog/admin/${this.postForm.id}/publish`, {})
      .subscribe({
        next: (updated) => {
          this.postForm.isPublished = updated.isPublished;
          this.postForm.publishedAt = updated.publishedAt;
          this.toast.success(updated.isPublished ? 'Published' : 'Unpublished');
          this.loadPosts();
        },
        error: () => this.toast.error('Failed to toggle publish'),
      });
  }

  async deletePost(post: BlogPost): Promise<void> {
    const ok = await this.confirm.open(
      'Delete Post',
      `Delete "${this.getPostTitle(post)}"? This cannot be undone.`,
    );
    if (!ok) return;

    this.api.delete(`/blog/admin/${post.id}`).subscribe({
      next: () => {
        this.toast.success('Post deleted');
        if (this.postForm.id === post.id) {
          this.cancelEdit();
        }
        this.loadPosts();
      },
      error: () => this.toast.error('Failed to delete post'),
    });
  }

  // ─── Block editor ───

  get currentBlocks(): BlogBlock[] {
    if (!this.activeLanguageId || !this.translationMap[this.activeLanguageId]) return [];
    return this.translationMap[this.activeLanguageId].blocks;
  }

  get currentTranslation(): BlogTranslation | null {
    if (!this.activeLanguageId) return null;
    return this.translationMap[this.activeLanguageId] || null;
  }

  addBlock(type: string, atIndex?: number): void {
    if (!this.activeLanguageId) return;
    const t = this.translationMap[this.activeLanguageId];
    if (!t) return;
    this.pushSnapshot();

    const newBlock: BlogBlock = {
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
    if (!this.activeLanguageId) return;
    const t = this.translationMap[this.activeLanguageId];
    if (!t) return;
    this.pushSnapshot();
    t.blocks.splice(index, 1);
    this.reindexBlocks(t.blocks);
  }

  duplicateBlock(index: number): void {
    if (!this.activeLanguageId) return;
    const t = this.translationMap[this.activeLanguageId];
    if (!t) return;
    this.pushSnapshot();
    const copy: BlogBlock = JSON.parse(JSON.stringify(t.blocks[index]));
    t.blocks.splice(index + 1, 0, copy);
    this.reindexBlocks(t.blocks);
  }

  moveBlockUp(index: number): void {
    if (index <= 0 || !this.activeLanguageId) return;
    const t = this.translationMap[this.activeLanguageId];
    if (!t) return;
    this.pushSnapshot();
    [t.blocks[index - 1], t.blocks[index]] = [t.blocks[index], t.blocks[index - 1]];
    this.reindexBlocks(t.blocks);
  }

  moveBlockDown(index: number): void {
    if (!this.activeLanguageId) return;
    const t = this.translationMap[this.activeLanguageId];
    if (!t || index >= t.blocks.length - 1) return;
    this.pushSnapshot();
    [t.blocks[index], t.blocks[index + 1]] = [t.blocks[index + 1], t.blocks[index]];
    this.reindexBlocks(t.blocks);
  }

  onBlockDrop(event: CdkDragDrop<BlogBlock[]>): void {
    if (!this.activeLanguageId) return;
    const t = this.translationMap[this.activeLanguageId];
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

  // ─── Helpers ───

  getPostTitle(post: BlogPost): string {
    if (!post.translations || post.translations.length === 0) return post.slug;
    const defaultT = post.translations.find(
      (t) => t.languageId === this.languages.find((l) => l.isDefault)?.id,
    );
    return defaultT?.title || post.translations[0]?.title || post.slug;
  }

  getPostStatus(post: BlogPost): string {
    return post.isPublished ? 'Published' : 'Draft';
  }

  getPostTranslationCount(post: BlogPost): number {
    return post.translations?.filter((t) => t.isVisible)?.length || 0;
  }

  getLanguageName(langId: number): string {
    return this.languages.find((l) => l.id === langId)?.name || '';
  }

  getLanguageCode(langId: number): string {
    return this.languages.find((l) => l.id === langId)?.code || '';
  }

  getBlockIcon(type: string): string {
    return BLOCK_TYPES.find((b) => b.type === type)?.icon || 'fa-cube';
  }

  getBlockLabel(type: string): string {
    return BLOCK_TYPES.find((b) => b.type === type)?.label || type;
  }

  autoSlug(): void {
    if (!this.activeLanguageId) return;
    const t = this.translationMap[this.activeLanguageId];
    if (!t || !t.title) return;
    this.postForm.slug = t.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
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
    if (!this.activeLanguageId || !this.translationMap[this.activeLanguageId]) return null;
    const t = this.translationMap[this.activeLanguageId];
    return {
      langId: this.activeLanguageId,
      title: t.title,
      description: t.description,
      blocks: JSON.parse(JSON.stringify(t.blocks)),
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

  private emptyPost(): BlogPost {
    return {
      slug: '',
      coverImageUrl: '',
      isPublished: false,
    };
  }

  private buildTranslationMap(translations: BlogTranslation[]): void {
    this.translationMap = {};
    // Initialize all languages
    for (const lang of this.languages) {
      this.translationMap[lang.id] = {
        languageId: lang.id,
        title: '',
        description: '',
        isVisible: false,
        blocks: [],
      };
    }
    // Fill in existing translations
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

  private getDefaultMetadata(type: string): Record<string, any> {
    switch (type) {
      case 'heading':
        return { level: 2 };
      case 'list':
        return { style: 'unordered' };
      case 'code':
        return { language: 'typescript' };
      case 'image':
        return { url: '', caption: '' };
      case 'callout':
        return { type: 'info' };
      case 'toggle':
        return { summary: '' };
      default:
        return {};
    }
  }

  private reindexBlocks(blocks: BlogBlock[]): void {
    blocks.forEach((b, i) => (b.orderIndex = i));
  }
}
