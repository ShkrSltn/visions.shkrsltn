import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LanguageService } from './language.service';
import { environment } from '../../environments/environment';

export interface BlogPostListItem {
  id: number;
  slug: string;
  coverImageUrl: string;
  title: string;
  description: string;
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
}

export interface BlogBlock {
  id: number;
  type: string;
  content: string;
  metadata: Record<string, any>;
  orderIndex: number;
}

export interface BlogTranslation {
  id: number;
  languageId: number;
  languageCode: string;
  title: string;
  description: string;
  isVisible: boolean;
  blocks: BlogBlock[];
}

export interface BlogPostFull {
  id: number;
  slug: string;
  coverImageUrl: string;
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  translations: BlogTranslation[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
  ) {}

  getPosts(): Observable<BlogPostListItem[]> {
    return this.languageService.currentLang$.pipe(
      switchMap((lang) =>
        this.http.get<BlogPostListItem[]>(
          `${environment.apiUrl}/blog?lang=${lang}`,
        ),
      ),
    );
  }

  getPost(slug: string): Observable<BlogPostFull> {
    return this.languageService.currentLang$.pipe(
      switchMap((lang) =>
        this.http.get<BlogPostFull>(
          `${environment.apiUrl}/blog/post/${slug}?lang=${lang}`,
        ),
      ),
    );
  }
}
