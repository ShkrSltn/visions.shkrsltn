import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BlogService, BlogPostListItem } from '../../services/blog.service';
import { AdminAuthService } from '../../admin/services/admin-auth.service';
import { AdminApiService } from '../../admin/services/admin-api.service';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';

interface AdminPost {
  id: number;
  slug: string;
  coverImageUrl?: string;
  isPublished: boolean;
  publishedAt?: string;
  createdAt?: string;
  translations?: {
    languageId: number;
    title: string;
    description?: string;
    isVisible: boolean;
  }[];
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeroComponent, TranslateModule, ScrollAnimateDirective, DateFormatPipe],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  posts: BlogPostListItem[] = [];
  adminPosts: AdminPost[] = [];
  loading = true;
  isAdmin = false;

  showNewPostModal = false;
  newSlug = '';
  newTitle = '';
  creating = false;

  private destroyRef = inject(DestroyRef);

  constructor(
    private blogService: BlogService,
    private authService: AdminAuthService,
    private adminApi: AdminApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAuthenticated();

    if (this.isAdmin) {
      this.loadAdminPosts();
    } else {
      this.blogService.getPosts()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (data) => {
            this.posts = data;
            this.loading = false;
          },
          error: () => (this.loading = false),
        });
    }
  }

  loadAdminPosts(): void {
    this.adminApi.get<AdminPost[]>('/blog/admin/all').subscribe({
      next: (data) => {
        this.adminPosts = data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  getAdminPostTitle(post: AdminPost): string {
    if (!post.translations || post.translations.length === 0) return post.slug;
    return post.translations[0]?.title || post.slug;
  }

  getAdminPostDescription(post: AdminPost): string {
    if (!post.translations || post.translations.length === 0) return '';
    return post.translations[0]?.description || '';
  }

  openNewPostModal(): void {
    this.newSlug = '';
    this.newTitle = '';
    this.showNewPostModal = true;
  }

  closeNewPostModal(): void {
    this.showNewPostModal = false;
  }

  createPost(): void {
    if (!this.newSlug || this.creating) return;
    this.creating = true;

    const slug = this.newSlug
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    this.adminApi
      .post<AdminPost>('/blog/admin', {
        slug,
        isPublished: false,
        translations: this.newTitle
          ? [{ languageId: 1, title: this.newTitle, isVisible: true, blocks: [] }]
          : [],
      })
      .subscribe({
        next: (created) => {
          this.creating = false;
          this.showNewPostModal = false;
          this.router.navigate(['/blog', created.slug]);
        },
        error: () => (this.creating = false),
      });
  }

  autoSlugFromTitle(): void {
    if (!this.newTitle) return;
    this.newSlug = this.newTitle
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  async deletePost(post: AdminPost, event: Event): Promise<void> {
    event.preventDefault();
    event.stopPropagation();
    if (!confirm(`Delete "${this.getAdminPostTitle(post)}"?`)) return;

    this.adminApi.delete(`/blog/admin/${post.id}`).subscribe({
      next: () => this.loadAdminPosts(),
    });
  }

}
