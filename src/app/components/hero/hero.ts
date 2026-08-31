import { Component } from '@angular/core';
import { Reveal } from '../../reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {}
