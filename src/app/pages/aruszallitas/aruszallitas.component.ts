import { Component } from '@angular/core';

@Component({
  selector: 'app-aruszallitas',
  standalone: true,
  imports: [],
  templateUrl: './aruszallitas.component.html',
  styleUrl: './aruszallitas.component.scss'
})
export class AruszallitasComponent {
  sliders = [
    { before: 'assets/before_1.jpeg', after: 'assets/after_1.jpeg', value: 50 },
    { before: 'assets/before_2.jpeg', after: 'assets/after_2.jpeg', value: 50 },
    { before: 'assets/before_3.jpeg', after: 'assets/after_3.jpeg', value: 50 }
  ];

  // Ez a függvény mozgatja a csúszkát
  updateSlider(event: any, index: number) {
    this.sliders[index].value = event.target.value;
  }
}
