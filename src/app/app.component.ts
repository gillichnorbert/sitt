import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Ez kell!
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sitt-transport';
  @HostListener('document:click', ['$event'])
  trackContact(event: MouseEvent): void {
    const anchor = (event.target as Element)?.closest?.('a');
    const href = anchor?.getAttribute('href') ?? '';
    const method = href.startsWith('tel:') ? 'phone' : href.startsWith('mailto:') ? 'email' : null;
    const analytics = (window as unknown as {gtag?: (...args: unknown[]) => void}).gtag;
    if (method && analytics) analytics('event', 'contact_click', {contact_method: method, page_path: window.location.pathname});
  }
}