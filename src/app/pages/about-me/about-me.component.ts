import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { SkillsService, Skill } from '../../services/skills.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit, OnInit {
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  otherSkills: Skill[] = [];
  techStack: string[] = [];
  currentLang: string;
  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    private skillsService: SkillsService
  ) {
    this.currentLang = this.languageService.getCurrentLang();
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  ngOnInit() {
    this.loadSkills();

    // Подписываемся на изменения языка для обновления данных
    this.languageService.currentLang$.subscribe(() => {
      this.loadSkills();
    });
  }

  loadSkills() {
    this.skillsService.getSkills().subscribe(data => {
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

  // Новая функция для вычисления возраста
  myYear(): number {
    const birthDate = new Date(2000, 2, 31); // Месяц начинается с 0, поэтому март = 2
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // Проверяем, прошел ли уже день рождения в этом году
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
