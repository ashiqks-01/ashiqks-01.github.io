import { Directive, ElementRef, OnInit, inject } from '@angular/core';

/**
 * Adds a fade/slide-in animation when the element scrolls into view.
 * The `reveal` class is applied via JS so content stays visible if JS is disabled.
 */
@Directive({
  selector: '[appReveal]'
})
export class Reveal implements OnInit {
  private host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    el.classList.add('reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
  }
}
