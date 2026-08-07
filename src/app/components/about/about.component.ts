import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
  // Az 5 darab előtte-utána képpár adatai (Címek nélkül)
  sliders = [
    { before: 'assets/before_1.jpeg', after: 'assets/after_1.jpeg', value: 50 },
    { before: 'assets/before_2.jpeg', after: 'assets/after_2.jpeg', value: 50 },
    { before: 'assets/before_3.jpeg', after: 'assets/after_3.jpeg', value: 50 }
  ];

  updateSlider(event: any, index: number) {
    this.sliders[index].value = event.target.value;
  }
}