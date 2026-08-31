import { Component } from '@angular/core';
import { Reveal } from '../../reveal.directive';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly highlights = [
    { icon: '🎯', title: 'Full-Stack Delivery', text: 'Comfortable owning a feature end-to-end, from database schema to polished UI.' },
    { icon: '⚙️', title: 'Robust Backends', text: 'REST APIs with Java & Spring Boot, backed by well-designed SQL databases.' },
    { icon: '🎨', title: 'Modern Frontends', text: 'Responsive, accessible interfaces built with Angular and TypeScript.' },
    { icon: '🚀', title: 'Always Learning', text: 'Currently expanding into Python backends and cleaner architecture.' }
  ];
}
