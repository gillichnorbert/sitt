import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nyilaszarok',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nyilaszarok.component.html',
  styleUrl: './nyilaszarok.component.scss'
})
export class NyilaszarokComponent {
  sliders = [
    { before: 'assets/nyilaszaro/parkany_before.webp', after: 'assets/nyilaszaro/parkany_after.webp', value: 50 },
    { before: 'assets/nyilaszaro/vasalat_before.webp', after: 'assets/nyilaszaro/vasalat_after.webp', value: 50 },
    { before: 'assets/nyilaszaro/tolo_before.webp', after: 'assets/nyilaszaro/tolo_after.webp', value: 50 }
  ];

  // Ez a függvény mozgatja a csúszkát
  updateSlider(event: any, index: number) {
    this.sliders[index].value = event.target.value;
  }
}
