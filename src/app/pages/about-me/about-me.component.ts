import {
  Component,
  AfterViewInit,
  HostListener,
  OnInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
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
  @ViewChild('timelineTrack') timelineTrack?: ElementRef<HTMLElement>;
  @ViewChildren('timelineEvent') timelineEvents?: QueryList<ElementRef<HTMLElement>>;
  timelineProgressStyle: { width?: string; height?: string } = {};
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
    this.updateTimelineProgress();

    // Даем браузеру дорисовать размеры, затем обновляем прогресс
    setTimeout(() => this.updateTimelineProgress());
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

  @HostListener('window:resize')
  onResize() {
    this.updateTimelineProgress();
  }

  private updateTimelineProgress() {
    if (!this.timelineTrack || !this.timelineEvents || this.timelineEvents.length === 0) {
      return;
    }

    const trackRect = this.timelineTrack.nativeElement.getBoundingClientRect();
    const events = this.timelineEvents.toArray();
    const currentEvent =
      events.find(event => event.nativeElement.classList.contains('current')) ||
      events.filter(event => !event.nativeElement.classList.contains('future')).pop() ||
      events[events.length - 1];

    if (!currentEvent) {
      return;
    }

    const targetRect = currentEvent.nativeElement.getBoundingClientRect();
    const isVertical = trackRect.height > trackRect.width;

    if (isVertical) {
      const progressPx = targetRect.top + targetRect.height / 2 - trackRect.top;
      const clamped = Math.max(0, Math.min(progressPx, trackRect.height));
      this.timelineProgressStyle = {
        width: '100%',
        height: `${clamped}px`
      };
    } else {
      const progressPx = targetRect.left + targetRect.width / 2 - trackRect.left;
      const clamped = Math.max(0, Math.min(progressPx, trackRect.width));
      this.timelineProgressStyle = {
        width: `${clamped}px`,
        height: '100%'
      };
    }
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
