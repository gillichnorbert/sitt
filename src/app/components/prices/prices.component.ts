import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Fontos a ngClass miatt

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  // Alapértelmezetten Budapest van kiválasztva
  selectedLocation: 'budapest' | 'pest' = 'budapest';

  // Itt állítsd be az árakat!
  pricing = {
    budapest: {
      inert: '1.200',
      mixed: '1.500',
      floor: '200'
    },
    pest: {
      inert: '1.400', // PÉLDA ÁR - Írd át!
      mixed: '1.700', // PÉLDA ÁR - Írd át!
      floor: '300'   // PÉLDA ÁR - Írd át!
    }
  };

  setLocation(location: 'budapest' | 'pest') {
    this.selectedLocation = location;
  }
}