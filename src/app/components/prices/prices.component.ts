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
  
  // 3 Különálló szolgáltatás kártya árak nélkül, de értelmes állapotjelekkel
  pricingItems = [
    {
      title: 'Zsákos Sittszállítás',
      badge: 'Legnépszerűbb',
      featured: true,
      desc: 'Építési törmelék, tégla, beton és vegyes sitt elszállítása kisteherautóval, emeleti vagy pincéből történő lehordással.',
      icon: 'bi-box-seam-fill',
      features: [
        { name: 'Kiszállítás', value: 'Gyors, 24 órán belül' },
        { name: 'Kézi rakodás & lehordás', value: 'Igényelhető' },
        { name: 'Engedély', value: 'Nem szükséges' }
      ]
    },
    {
      title: 'Lomtalanítás & Kiürítés',
      badge: 'Egyedi árazás',
      featured: false,
      desc: 'Ingatlanok, lakások, pincék és padlások teljes kiürítése, hagyatékok felszámolása tapintatos és tiszta munkavégzéssel.',
      icon: 'bi-house-gear-fill',
      features: [
        { name: 'Helyszíni felmérés', value: 'Ingyenes' },
        { name: 'Árképzés', value: 'Előre egyeztetett fix ár' },
        { name: 'Teljes körű pakolás', value: 'Biztosított' }
      ]
    },
    {
      title: 'Tehertaxi & Áruszállítás',
      badge: 'Rugalmas',
      featured: false,
      desc: 'Nagyméretű bútorok, építőanyagok, raklapos áruk megbízható és sérülésmentes fuvarozása fel- és lepakolással.',
      icon: 'bi-truck',
      features: [
        { name: 'Kiszállási terület', value: 'Budapest & Pest megye' },
        { name: 'Rakodószemélyzet', value: 'Biztosított' },
        { name: 'Szállítási mód', value: 'Fix vagy óradíjas' }
      ]
    }
  ];

}
