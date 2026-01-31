import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';
import { switchMap } from 'rxjs/operators';

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
      switchMap(lang => {
        return this.http.get<ProjectsData>(`/data/${lang}/projects.json`);
      })
    );
  }
}
