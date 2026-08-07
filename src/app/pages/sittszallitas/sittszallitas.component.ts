import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Szükséges az *ngFor-hoz!
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sittszallitas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sittszallitas.component.html',
  styleUrls: ['./sittszallitas.component.scss']
})
export class SittszallitasComponent {
  // Ide jönnek a csúszka képei
  sliders = [
    { before: 'assets/sittszallitas/before_1.jpeg', after: 'assets/sittszallitas/after_1.jpeg', value: 50 },
    { before: 'assets/sittszallitas/before_2.webp', after: 'assets/sittszallitas/after_2.webp', value: 50 },
    { before: 'assets/sittszallitas/before_3.jpeg', after: 'assets/sittszallitas/after_3.jpeg', value: 50 }
  ];

  // Ez a függvény mozgatja a csúszkát
  updateSlider(event: any, index: number) {
    this.sliders[index].value = event.target.value;
  }
}