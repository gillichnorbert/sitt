import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BLOG_POSTS } from './blog-posts';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  private readonly route = inject(ActivatedRoute);
  readonly post = toSignal(this.route.data.pipe(map(data => BLOG_POSTS.find(post => post.slug === data['slug']))),
    { initialValue: BLOG_POSTS.find(post => post.slug === this.route.snapshot.data['slug']) });

  relatedPosts(slug: string) {
    const category = BLOG_POSTS.find(post => post.slug === slug)?.category;
    return BLOG_POSTS.filter(post => post.slug !== slug)
      .sort((a, b) => Number(b.category === category) - Number(a.category === category)).slice(0, 2);
  }
}
