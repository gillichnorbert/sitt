import { Component } from '@angular/core';
import { BlogCardsComponent } from './blog-cards.component';

@Component({
  standalone: true,
  imports: [BlogCardsComponent],
  template: '<app-blog-cards [standalonePage]="true" />'
})
export class BlogIndexComponent {}
