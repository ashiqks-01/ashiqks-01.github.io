import { Component } from '@angular/core';
import { Reveal } from '../../reveal.directive';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly links: ContactLink[] = [
    { label: 'Email', value: 'ashiqks9061@gmail.com', href: 'mailto:ashiqks9061@gmail.com', icon: 'mail' },
    { label: 'GitHub', value: 'github.com/ashiqks-01', href: 'https://github.com/ashiqks-01', icon: 'github' },
    { label: 'LinkedIn', value: 'ashiq-k-s', href: 'https://www.linkedin.com/in/ashiq-k-s-757637277/', icon: 'linkedin' }
  ];
}
