import { Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router'; // EZT IMPORTÁLNI KELLETT A LINKEKHEZ
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive'; 

@Component({
  selector: 'app-services',
  standalone: true,
  // HOZZÁADVA A ROUTERMODULE
  imports: [ScrollRevealDirective, RouterModule], 
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  standalonePage = inject(ActivatedRoute).snapshot.routeConfig?.path === 'szolgaltatasok';
  services = [
    {
      title: 'Zsákos sittszállítás',
      image: 'assets/sitteszsak.jpg',
      url: 'sittszallitas'
    },
    {
      title: 'Áruszállítás / Tehertaxi',
      image: 'assets/aruszallitascover.webp',
      url: 'aruszallitas'
    },
    {
      title: 'Lomtalanítás',
      image: 'assets/lomtalanitas_2.webp',
      url: 'lomtalanitas'
    }
  ];
}