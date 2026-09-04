import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  
  // A 4 fő szolgáltatás árazási adatai
  pricingItems = [
    {
      title: 'Sittszállítás és Lomtalanítás',
      price: '990 Ft',
      unit: '/ Zsáktól',
      desc: 'Tiszta sitt 14 000 Ft-tól, vegyes hulladék 16 000 Ft-tól. Teljes lomtalanítás megegyezés szerint, ingyenes felméréssel.',
      icon: 'bi-trash3-fill'
    },
    {
      title: 'Áruszállítás / Teherfuvarozás',
      price: '20 000 Ft',
      unit: '/ óra-tól',
      desc: 'Gyors és biztonságos árutovábbítás. Városon belüli és Pest megyei fuvarozás. Fix áras konstrukció is kérhető.',
      icon: 'bi-truck'
    },
    {
      title: 'Gépi Földmunka',
      price: '15 000 Ft',
      unit: '/ gépóra-tól',
      desc: 'Tereprendezés, alapásás és anyagmozgatás professzionális gépparkkal. Az ár tartalmazza a gépkezelő díját is.',
      icon: 'bi-cone-striped'
    },
    {
      title: 'Nyílászárók Szervizelése',
      price: 'Egyedi',
      unit: 'árajánlat',
      desc: 'A pontos árat az ingyenes helyszíni felmérés, a vasalatok állapota és a beépítési paraméterek tükrében határozzuk meg.',
      icon: 'bi-door-open-fill'
    }
  ];

}