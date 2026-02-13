import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProjectService, Project } from '../../services/project.service';
import { ProjectsSectionComponent } from '../../shared/components/projects-section/projects-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { SkillsService } from '../../services/skills.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { SOCIAL_LINKS } from '../../shared/constants/social-links';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsSectionComponent, TranslateModule, ScrollAnimateDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  gitHubLink = SOCIAL_LINKS.github;
  linkedInLink = SOCIAL_LINKS.linkedin;
  emailLink = SOCIAL_LINKS.email;
  featuredProjects: Project[] = [];
  techStack: string[] = [];

  private destroyRef = inject(DestroyRef);

  constructor(
    private projectService: ProjectService,
    private skillsService: SkillsService,
  ) {}

  ngOnInit() {
    this.projectService.getProjects()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        this.featuredProjects = data.featuredProjects.filter(project => project.featured);
      });

    this.skillsService.getSkills()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        this.techStack = data.techStack;
      });
  }
}
