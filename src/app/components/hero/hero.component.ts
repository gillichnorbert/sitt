import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // EZ A KULCS A LINKEKHEZ!

@Component({
  selector: 'app-hero',
  standalone: true,
  // Ide is be kell tenni a RouterModule-t:
  imports: [CommonModule, RouterModule], 
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  // A kódod többi része marad ahogy volt
}