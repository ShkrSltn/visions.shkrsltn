import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appFadeIn]',
    standalone: true
})
export class FadeInDirective implements OnInit {
    private observer: IntersectionObserver;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {
        this.observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(this.el.nativeElement, 'fade-in-visible');
                    this.observer.unobserve(this.el.nativeElement);
                }
            },
            {
                threshold: 0.1 // Элемент начнет появляться когда 10% его будет видно
            }
        );
    }

    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
        this.renderer.addClass(this.el.nativeElement, 'fade-in');
        this.observer.observe(this.el.nativeElement);
    }
}
