import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  // Здесь можно добавить логику компонента в будущем

  ngAfterViewInit() {
    // Анимация для элементов при загрузке
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--animation-order', index.toString());
    });

    // Первоначальная проверка видимых элементов
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

      // Если элемент виден в окне просмотра (с небольшим запасом)
      if (position.top < windowHeight * 0.85 && position.bottom > 0) {
        element.classList.add('visible');
      }
    });
  }
}
