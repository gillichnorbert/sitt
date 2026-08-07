import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true // Ha standalone komponenst használsz
})
export class ScrollRevealDirective implements OnInit {
  @Input() delay: string = '0ms';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Kezdeti állapot: átlátszó és picit lejjebb van
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(40px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', `all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) ${this.delay}`);

    // Figyeljük, hogy a képernyőre görget-e a felhasználó
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ha láthatóvá válik, beúszik
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
          observer.unobserve(this.el.nativeElement); // Csak egyszer játssza le
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }
}