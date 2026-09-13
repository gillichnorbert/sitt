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
  
  // Pontosan 2 nagy kártya adatai
  pricingItems = [
    {
      title: 'Zsákos sittszállítás és Lomtalanítás',
      desc: 'Teljes lomtalanítás ingyenes helyszíni felmérés alapján, teljes körű rakodással és gyors kiszállással.',
      icon: 'bi-trash3-fill',
      subPrices: [
        { name: 'Tiszta sitt: (tégla, beton, csempe, vakolat, stb.)', value: '14 000 Ft / m³' },
        { name: 'Vegyes sitt: (lom, papír, műanyag, fa, gipsz, stb.)', value: '16 000 Ft / m³' }
      ]
    },
    {
      title: 'Tehertaxi és Áruszállítás',
      desc: 'Gyors és megbízható tehertaxi és áruszállítás biztonságosan, teljes körű rakodással.',
      icon: 'bi-truck',
      subPrices: [
        { name: 'Áruszállítás / Teherfuvarozás', value: '20 000 Ft / óra-tól' },
      ]
    }
  ];

}