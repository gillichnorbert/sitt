import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Ez kell az [class.open] miatt

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  // Menü kinyitása / bezárása a hamburger gombbal
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.handleBodyScroll();
  }

  // Menü bezárása (Ezt hívjuk meg, ha a felhasználó rákattint egy linkre)
  closeMenu() {
    this.isMenuOpen = false;
    this.handleBodyScroll();
  }

  @HostListener('window:resize')
  closeMenuOnDesktop() {
    if (this.isMenuOpen && window.innerWidth >= 992) this.closeMenu();
  }

  // Háttér görgetésének letiltása, ha nyitva a menü
  private handleBodyScroll() {
    if (this.isMenuOpen) {
      document.getElementById('mobile-menu')?.scrollTo({ top: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
