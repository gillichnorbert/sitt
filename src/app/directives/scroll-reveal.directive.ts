import { afterNextRender, Directive, ElementRef, inject, Input, OnDestroy } from '@angular/core';
@Directive({selector: '[appScrollReveal]', standalone: true})
export class ScrollRevealDirective implements OnDestroy {
  @Input() delay = '0ms';
  private el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  constructor() {
    afterNextRender(() => {
      if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      this.observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          this.el.nativeElement.animate?.([{ transform: 'translateY(20px)' }, { transform: 'translateY(0)' }], { duration: 500, delay: parseFloat(this.delay) || 0 });
          this.observer?.disconnect();
        }
      });
      this.observer.observe(this.el.nativeElement);
    });
  }
  ngOnDestroy(): void { this.observer?.disconnect(); }
}
