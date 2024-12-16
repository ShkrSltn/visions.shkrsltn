import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRipple]',
  standalone: true
})
export class RippleDirective {
  @Input() rippleSize = 80;
  @Input() rippleDuration = 600;

  private colors = [
    'rgba(52, 211, 153, 0.7)',  // emerald-400
    'rgba(59, 130, 246, 0.7)',  // blue-500 
    'rgba(167, 139, 250, 0.7)', // violet-400
    'rgba(251, 146, 60, 0.7)',  // orange-400
    'rgba(248, 113, 113, 0.7)', // red-400
    'rgba(45, 212, 191, 0.7)',  // teal-400
    'rgba(74, 222, 128, 0.7)',  // green-400
    'rgba(96, 165, 250, 0.7)',  // blue-400
    'rgba(192, 132, 252, 0.7)', // purple-400
    'rgba(251, 113, 133, 0.7)', // rose-400
    'rgba(34, 211, 238, 0.7)',  // cyan-400
    'rgba(250, 204, 21, 0.7)',  // yellow-400
  ];

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.position = 'relative';
    this.el.nativeElement.style.overflow = 'hidden';
  }

  private getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const ripple = document.createElement('span');
    const rect = this.el.nativeElement.getBoundingClientRect();

    const size = this.rippleSize;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';
    ripple.style.backgroundColor = this.getRandomColor();
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = `rippleAnimation ${this.rippleDuration}ms linear`;
    ripple.style.pointerEvents = 'none';

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes rippleAnimation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    this.el.nativeElement.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
      styleSheet.remove();
    }, this.rippleDuration);
  }
}