import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {

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
