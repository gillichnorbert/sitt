import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { SEO_PAGES } from './pages';
@Injectable()
export class SeoTitleStrategy extends TitleStrategy {
  private doc = inject(DOCUMENT);
  private meta = inject(Meta);
  private title = inject(Title);
  override updateTitle(state: RouterStateSnapshot): void {
    const path = state.url.split(/[?#]/)[0].replace(/^\/+|\/+$/g, '');
    const page = SEO_PAGES[path];
    const title = page?.title ?? 'Az oldal nem található | TerraMove';
    const description = page?.description ?? 'A keresett oldal nem található. Tekintse meg a TerraMove szolgáltatásait.';
    const url = 'https://terramove.hu/' + path;
    const image = 'https://terramove.hu' + (page?.image ?? '/assets/borito.webp');
    this.doc.getElementById('hero-preload')?.remove();
    if (!path) { const preload = this.doc.createElement('link'); preload.id = 'hero-preload'; preload.rel = 'preload'; preload.as = 'image'; preload.href = '/assets/cover.webp'; this.doc.head.appendChild(preload); }
    this.title.setTitle(title);
    for (const [name, content] of Object.entries({description, robots: page ? 'index, follow, max-image-preview:large' : 'noindex, follow', 'twitter:card': 'summary_large_image', 'twitter:title': title, 'twitter:description': description, 'twitter:image': image})) this.meta.updateTag({name, content});
    for (const [property, content] of Object.entries({'og:title': title, 'og:description': description, 'og:url': url, 'og:image': image, 'og:image:alt': 'TerraMove – szállítás és földmunka', 'og:type': 'website', 'og:locale': 'hu_HU', 'og:site_name': 'TerraMove'})) this.meta.updateTag({property, content});
    this.doc.querySelectorAll('link[rel="canonical"]').forEach(el => el.remove());
    if (page) {const link = this.doc.createElement('link'); link.rel = 'canonical'; link.href = url; this.doc.head.appendChild(link);}
    this.doc.getElementById('seo-schema')?.remove();
    if (!page) return;
    const business = {'@type': 'Organization', '@id': 'https://terramove.hu/#organization', name: 'TerraMove', url: 'https://terramove.hu/', logo: 'https://terramove.hu/assets/logo.webp', telephone: '+36707287316', email: 'info@terramove.hu', areaServed: ['Budapest', 'Pest vármegye'], sameAs: ['https://www.facebook.com/profile.php?id=61588377595699', 'https://www.instagram.com/sittransport_/', 'https://www.tiktok.com/@sitttransport']};
    const graph: object[] = [business, {'@type': 'WebSite', '@id': 'https://terramove.hu/#website', url: 'https://terramove.hu/', name: 'TerraMove', inLanguage: 'hu-HU', publisher: {'@id': business['@id']}}, {'@type': 'WebPage', '@id': url + '#webpage', url, name: title, description, inLanguage: 'hu-HU', isPartOf: {'@id': 'https://terramove.hu/#website'}}];
    if (path) {
      const paths = path.split('/').map((_, i, parts) => parts.slice(0, i + 1).join('/'));
      graph.push({'@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Főoldal', item: 'https://terramove.hu/' }, ...paths.map((key, i) => ({'@type': 'ListItem', position: i + 2, name: SEO_PAGES[key]?.label ?? key, item: 'https://terramove.hu/' + key}))]});
    }
    if (path.startsWith('szolgaltatasok/')) graph.push({'@type': 'Service', name: page.label, description, url, provider: {'@id': business['@id']}, areaServed: ['Budapest', 'Pest vármegye']});
    const script = this.doc.createElement('script'); script.id = 'seo-schema'; script.type = 'application/ld+json'; script.textContent = JSON.stringify({'@context': 'https://schema.org', '@graph': graph}).replace(/</g, '\\u003c'); this.doc.head.appendChild(script);
  }
}
