import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService, Project } from '../../services/project.service';
import { ProjectsSectionComponent } from '../../shared/components/projects-section/projects-section.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsSectionComponent, HeroComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit, OnInit {
  featuredProjects: Project[] = [];
  otherProjects: Project[] = [];

  constructor(private projectService: ProjectService, private translate: TranslateService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.featuredProjects = data.featuredProjects.filter(project => project.featured);
      this.otherProjects = data.featuredProjects.filter(project => !project.featured);
    });
  }

  ngAfterViewInit() {
    // Animation for elements on load
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--animation-order', index.toString());
    });

    // Initial check for visible elements
    this.checkVisibility();
  }

  @HostListener('window:scroll')
  checkVisibility() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
      const position = element.getBoundingClientRect();

      // If the element is visible in the viewport
      if (position.top < window.innerHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  }
}
