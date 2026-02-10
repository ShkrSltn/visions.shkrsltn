import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';
import { switchMap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  featured: boolean;
  showDemo?: boolean;
  showCode?: boolean;
}

export interface ProjectsData {
  featuredProjects: Project[];
  otherProjects: Project[];
}

interface ApiProjectResponse {
  featuredProjects: {
    title: string;
    description: string;
    imageUrl?: string;
    technologies: string[];
    demoLink?: string;
    codeLink?: string;
    featured: boolean;
    showDemo?: boolean;
    showCode?: boolean;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  getProjects(): Observable<ProjectsData> {
    return this.languageService.currentLang$.pipe(
      switchMap(lang =>
        this.http.get<ApiProjectResponse>(
          `${environment.apiUrl}/projects/by-language/${lang}`
        )
      ),
      map(response => ({
        featuredProjects: (response.featuredProjects || []).map(p => ({
          title: p.title,
          description: p.description,
          image: p.imageUrl || '',
          technologies: p.technologies || [],
          demoLink: p.demoLink,
          codeLink: p.codeLink,
          featured: p.featured,
          showDemo: p.showDemo,
          showCode: p.showCode,
        })),
        otherProjects: [],
      }))
    );
  }
}
