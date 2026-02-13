import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProjectService, Project } from '../../services/project.service';
import { ProjectsSectionComponent } from '../../shared/components/projects-section/projects-section.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsSectionComponent, HeroComponent, TranslateModule, ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  featuredProjects: Project[] = [];
  otherProjects: Project[] = [];

  private destroyRef = inject(DestroyRef);

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        this.featuredProjects = data.featuredProjects.filter(project => project.featured);
        this.otherProjects = data.featuredProjects.filter(project => !project.featured);
      });
  }
}
