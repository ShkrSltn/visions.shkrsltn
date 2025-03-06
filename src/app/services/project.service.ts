import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

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
  allProjects: Project[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectsData> {
    return this.http.get<ProjectsData>('./assets/data/projects.json');
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('./assets/data/projects.json').pipe(
      map(projects => projects.filter(project => project.featured))
    );
  }

  getOtherProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('./assets/data/projects.json').pipe(
      map(projects => projects.filter(project => !project.featured))
    );
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('./assets/data/projects.json');
  }
}
