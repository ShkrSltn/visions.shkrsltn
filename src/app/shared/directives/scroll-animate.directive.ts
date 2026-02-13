import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  NgZone,
} from '@angular/core';

/**
 * Replaces the duplicated `checkVisibility()` + `ngAfterViewInit` animation
 * logic that was copy-pasted across 7+ page components.
 *
 * Usage: add `appScrollAnimate` on the page's root container element.
 *
 * The directive:
 * 1. Finds all `.animate-on-scroll` children and observes them with
 *    IntersectionObserver, adding `.visible` when they enter the viewport.
 * 2. Finds all `.animate-in` children and sets `--animation-order` CSS var.
 *
 * Uses IntersectionObserver instead of scroll listeners for better performance.
 */
@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private mutationObserver: MutationObserver | null = null;

  constructor(
    private el: ElementRef<HTMLElement>,
    private ngZone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    // Run outside Angular zone to avoid triggering change detection on every intersection
    this.ngZone.runOutsideAngular(() => {
      this.setupAnimateIn();
      this.setupIntersectionObserver();
      this.setupMutationObserver();
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.mutationObserver?.disconnect();
  }

  /** Sets --animation-order on `.animate-in` elements for staggered entrance */
  private setupAnimateIn(): void {
    const elements = this.el.nativeElement.querySelectorAll('.animate-in');
    elements.forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--animation-order', index.toString());
    });
  }

  /** Observes `.animate-on-scroll` elements and adds `.visible` when in view */
  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, no need to keep observing
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -15% 0px', // triggers when 85% from top, matching old behavior
      },
    );

    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      // Immediately show elements that are already in the viewport to avoid
      // a flash of invisible content on route navigation.
      const rect = (el as HTMLElement).getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('visible');
      } else {
        this.observer!.observe(el);
      }
    });
  }

  /** Watches for dynamically added elements (e.g. after data loads) */
  private setupMutationObserver(): void {
    this.mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('animate-on-scroll')) {
              this.observer?.observe(node);
            }
            node.querySelectorAll('.animate-on-scroll').forEach((child) => {
              this.observer?.observe(child);
            });
          }
        });
      }
    });

    this.mutationObserver.observe(this.el.nativeElement, {
      childList: true,
      subtree: true,
    });
  }
}
