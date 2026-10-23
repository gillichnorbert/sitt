import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from './blog-posts';

@Component({
  selector: 'app-blog-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-cards.component.html',
  styleUrl: './blog-cards.component.scss'
})
export class BlogCardsComponent {
  @Input() standalonePage = false;
  readonly posts = BLOG_POSTS;
}
