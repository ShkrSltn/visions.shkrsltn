import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjectService, Project } from '../../services/project.service';
import { ProjectsSectionComponent } from '../../shared/components/projects-section/projects-section.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsSectionComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnInit {
  gitHubLink = 'https://github.com/ShkrSltn';
  linkedInLink = 'https://www.linkedin.com/in/shkrsltn/';
  emailLink = 'mailto:sultanovshakir12@gmail.com';
  featuredProjects: Project[] = [];
  techStack: string[] = [];

  constructor(
    private projectService: ProjectService,
    private skillsService: SkillsService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.loadProjects();
    this.loadTechStack();

    // Обновляем данные при смене языка
    this.translateService.onLangChange.subscribe(() => {
      this.loadProjects();
      this.loadTechStack();
    });
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(data => {
      this.featuredProjects = data.featuredProjects.filter(project => project.featured);
    });
  }

  loadTechStack() {
    this.skillsService.getSkills().subscribe(data => {
      this.techStack = data.techStack;
    });
  }

  ngAfterViewInit() {
    // Animation for elements on load
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--animation-order', index.toString());
    });

    // Initial check for visible elements
    setTimeout(() => {
      this.checkVisibility();
    }, 100);
  }

  @HostListener('window:scroll', ['$event'])
  checkVisibility() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
      const position = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If element is visible in viewport (with a small margin)
      if (position.top < windowHeight * 0.85 && position.bottom > 0) {
        element.classList.add('visible');
      }
    });
  }
}
