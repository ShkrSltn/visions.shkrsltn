import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appRippleEffect]',
  standalone: true
})
export class RippleEffectDirective {
  @Input() rippleDuration: number = 800;
  @Input() rippleRadius: number = 100;
  @Input() starsCount: number = 5;

  private allStars: HTMLElement[] = [];
  private maxStars: number = 25;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const position = getComputedStyle(this.el.nativeElement).position;
    if (position === 'static') {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    }
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const ripple = this.renderer.createElement('span');
    const color = this.getRandomColor();

    this.renderer.addClass(ripple, 'ripple-wave');
    this.renderer.setStyle(ripple, 'position', 'absolute');
    this.renderer.setStyle(ripple, 'border-radius', '50%');
    this.renderer.setStyle(ripple, 'pointer-events', 'none');
    this.renderer.setStyle(ripple, 'transform', 'scale(0)');
    this.renderer.setStyle(ripple, 'border', `2px solid ${color}`);
    this.renderer.setStyle(ripple, 'animation', `ripple-animation ${this.rippleDuration / 1000}s ease-out`);

    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left - this.rippleRadius;
    const y = event.clientY - rect.top - this.rippleRadius;

    this.renderer.setStyle(ripple, 'width', `${this.rippleRadius * 2}px`);
    this.renderer.setStyle(ripple, 'height', `${this.rippleRadius * 2}px`);
    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);

    this.renderer.appendChild(this.el.nativeElement, ripple);

    this.createStars(x + this.rippleRadius, y + this.rippleRadius, this.rippleRadius);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, ripple);
    }, this.rippleDuration);
  }

  private createStars(centerX: number, centerY: number, radius: number): void {
    for (let i = 0; i < this.starsCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * radius;

      const starX = centerX + Math.cos(angle) * distance;
      const starY = centerY + Math.sin(angle) * distance;

      const star = this.renderer.createElement('div');
      const color = this.getRandomColor();
      const size = Math.random() * 3 + 1;

      this.renderer.addClass(star, 'star');
      this.renderer.setStyle(star, 'position', 'absolute');
      this.renderer.setStyle(star, 'width', `${size}px`);
      this.renderer.setStyle(star, 'height', `${size}px`);
      this.renderer.setStyle(star, 'background-color', color);
      this.renderer.setStyle(star, 'left', `${starX}px`);
      this.renderer.setStyle(star, 'top', `${starY}px`);

      this.renderer.appendChild(this.el.nativeElement, star);
      this.allStars.push(star);

      if (this.allStars.length > this.maxStars) {
        const oldStar = this.allStars.shift();
        if (oldStar) {
          this.renderer.addClass(oldStar, 'star-fade-out');
          setTimeout(() => {
            if (this.el.nativeElement.contains(oldStar)) {
              this.renderer.removeChild(this.el.nativeElement, oldStar);
            }
          }, 500);
        }
      }
    }
  }

  private getRandomColor(): string {
    const colors = [
      '#FFD700', // Gold
      '#F0F8FF', // AliceBlue
      '#FFFAFA', // Snow
      '#87CEEB', // SkyBlue
      '#E6E6FA', // Lavender
      '#FFF5EE', // SeaShell
      '#DDA0DD', // Plum
      '#98FB98', // PaleGreen
      '#FFA07A', // LightSalmon
      '#F0E68C', // Khaki
      '#B0E0E6', // PowderBlue
      '#FFB6C1', // LightPink
      '#FFDAB9', // PeachPuff
      '#E0FFFF', // LightCyan
      '#D8BFD8', // Thistle
      '#87CEFA',  // LightSkyBlue
      '#FF0000',
      '#00FF00',
      '#0000FF',
      '#FFFF00',
      '#FF00FF',
      '#00FFFF',
      '#FFFFFF',
      '#000000'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
