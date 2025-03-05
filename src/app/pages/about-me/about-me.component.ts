import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HttpClient } from '@angular/common/http';


interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit, OnInit {
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  otherSkills: Skill[] = [];
  techStack: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.http.get<{
      frontendSkills: Skill[],
      backendSkills: Skill[],
      otherSkills: Skill[],
      techStack: string[]
    }>('../../assets/data/skills.json').subscribe(data => {
      this.frontendSkills = data.frontendSkills;
      this.backendSkills = data.backendSkills;
      this.otherSkills = data.otherSkills;
      this.techStack = data.techStack;
    });
  }

  ngAfterViewInit() {
    // Анимация для элементов при загрузке
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--animation-order', index.toString());
    });

    // Первоначальная проверка видимых элементов
    this.checkVisibility();
  }

  @HostListener('window:scroll')
  checkVisibility() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
      const position = element.getBoundingClientRect();

      // Если элемент виден в окне просмотра
      if (position.top < window.innerHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  }
}
