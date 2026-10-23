import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { BaggedBenefitsComponent } from '../bagged-benefits/bagged-benefits.component'; // IMPORT
import { FaqComponent } from '../faq/faq.component';
import { ServicesComponent } from '../services/services.component';
import { BlogCardsComponent } from '../../blog/blog-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, BaggedBenefitsComponent, FaqComponent, ServicesComponent, BlogCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
