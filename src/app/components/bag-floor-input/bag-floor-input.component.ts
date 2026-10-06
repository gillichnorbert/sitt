import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bag-floor-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="input-card">
      <h3 class="section-title">Mennyiség és Helyszín</h3>
      
      <div class="input-group-custom">
        <label>Lehordandó zsákok száma (db)</label>
        <p class="text-muted small">1 000 Ft / zsák rakodás</p>
        <input type="number" class="form-control modern-input" [(ngModel)]="bags" min="0">
      </div>

      <div class="input-group-custom mt-4">
        <label>Emeletek száma</label>
        <p class="text-muted small">300 Ft / zsák / emelet felár</p>
        <input type="number" class="form-control modern-input" [(ngModel)]="floors" min="0">
      </div>

      <div class="input-group-custom mt-4 pt-4 border-top">
        <label>Ebből zsákolást igényel (db)</label>
        <p class="text-muted small">500 Ft / zsák felár</p>
        <input type="number" class="form-control modern-input" [(ngModel)]="bagsToBag" min="0">
      </div>
    </div>
  `,
  styles: [`
    .input-card {
      background: #ffffff; border-radius: 16px; padding: 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eee; height: 100%;
    }
    .section-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 1.5rem; color: #2b2b2b; }
    .modern-input {
      border: 2px solid #e0e0e0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 1.1rem; width: 100%; transition: border-color 0.3s;
    }
    .modern-input:focus { outline: none; border-color: #2b2b2b; }
    .border-top { border-top: 1px solid #f0f0f0; }
  `]
})
export class BagFloorInputComponent {
  bags = model<number>(0);
  floors = model<number>(0);
  bagsToBag = model<number>(0);
}
