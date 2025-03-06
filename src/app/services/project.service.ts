import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  featured: boolean;
}

export interface ProjectsData {
  featuredProjects: Project[];
  otherProjects: Project[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectsData> {
    return this.http.get<ProjectsData>('./assets/data/projects.json');
  }
}
