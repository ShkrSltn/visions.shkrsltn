import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../shared/interfaces/project.interface';
import { FEATURED_PROJECTS, ALL_PROJECTS } from '../../shared/data/projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getFeaturedProjects(): Observable<Project[]> {
    return of(FEATURED_PROJECTS);
  }

  getAllProjects(): Observable<Project[]> {
    return of(ALL_PROJECTS);
  }

  getProjectByTitle(title: string): Observable<Project | undefined> {
    return of(ALL_PROJECTS.find(project => project.title === title));
  }
} 