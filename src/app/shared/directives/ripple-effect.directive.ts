import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appRippleEffect]',
  standalone: true
})
export class RippleEffectDirective {
  @Input() rippleDuration: number = 800; // Уменьшенная длительность анимации в мс
  @Input() rippleColor: string = ''; // Если задан, будет использоваться этот цвет вместо случайного
  @Input() rippleOpacity: number = 0.6; // Начальная прозрачность эффекта
  @Input() rippleSize: number = 150; // Размер эффекта в пикселях (по умолчанию 100px)

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Устанавливаем position: relative для родительского элемента, если не установлено
    const position = getComputedStyle(this.el.nativeElement).position;
    if (position === 'static') {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    }

    // Добавляем overflow: hidden для контейнера
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    // Создаем элемент для эффекта волны
    const ripple = this.renderer.createElement('span');

    // Определяем цвет (случайный или заданный)
    const color = this.rippleColor || this.getRandomColor();

    // Устанавливаем стили для элемента волны
    this.renderer.addClass(ripple, 'ripple-effect');
    this.renderer.setStyle(ripple, 'position', 'absolute');
    this.renderer.setStyle(ripple, 'border-radius', '50%');
    this.renderer.setStyle(ripple, 'background-color', color);
    this.renderer.setStyle(ripple, 'opacity', this.rippleOpacity.toString());
    this.renderer.setStyle(ripple, 'transform', 'scale(0)');
    this.renderer.setStyle(ripple, 'animation', `ripple-animation ${this.rippleDuration / 1000}s ease-out`);
    this.renderer.setStyle(ripple, 'pointer-events', 'none');

    // Рассчитываем позицию
    const rect = this.el.nativeElement.getBoundingClientRect();
    const size = this.rippleSize;

    // Позиционируем относительно точки клика
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    this.renderer.setStyle(ripple, 'width', `${size}px`);
    this.renderer.setStyle(ripple, 'height', `${size}px`);
    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);

    // Добавляем элемент в DOM
    this.renderer.appendChild(this.el.nativeElement, ripple);

    // Удаляем элемент после завершения анимации
    setTimeout(() => {
      if (this.el.nativeElement.contains(ripple)) {
        this.renderer.removeChild(this.el.nativeElement, ripple);
      }
    }, this.rippleDuration);
  }

  // Функция для генерации случайного цвета
  private getRandomColor(): string {
    // Создаем массив пастельных цветов
    const colors = [
      'rgba(255, 179, 186, 0.7)', // Розовый
      'rgba(255, 223, 186, 0.7)', // Персиковый
      'rgba(255, 255, 186, 0.7)', // Светло-желтый
      'rgba(186, 255, 201, 0.7)', // Светло-зеленый
      'rgba(186, 225, 255, 0.7)', // Светло-голубой
      'rgba(186, 186, 255, 0.7)', // Лавандовый
      'rgba(255, 186, 255, 0.7)'  // Светло-фиолетовый
    ];

    // Выбираем случайный цвет из массива
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
