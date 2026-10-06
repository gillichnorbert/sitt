import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="summary-card text-white">
      <h3 class="section-title text-white">Kalkuláció részletei</h3>
      
      <div class="summary-row">
        <span>Alapdíj (40 000 Ft értékig)</span>
        <span>{{ basePrice() | number:'1.0-0' }} Ft</span>
      </div>
      
      <!-- Csak akkor mutatjuk a többletdíjat, ha a nyers matek 40k fölé megy -->
      @if (extraFee() > 0) {
        <div class="summary-row text-warning">
          <span>Többletdíj (mennyiség / emelet / zsákolás)</span>
          <span>+ {{ extraFee() | number:'1.0-0' }} Ft</span>
        </div>
      }

      <div class="summary-row text-muted small border-bottom-subtle">
        <span>Kiszállási díj (az alapdíj tartalmazza)</span>
        <span>10 000 Ft</span>
      </div>

      <div class="total-row mt-3">
        <span>Végösszeg:</span>
        <span class="total-price">{{ finalTotal() | number:'1.0-0' }} Ft</span>
      </div>
    </div>
  `,
  styles: [`
    .summary-card {
      background: #1f2327; border-radius: 16px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.15); height: 100%;
    }
    .section-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 1.5rem; }
    .summary-row {
      display: flex; justify-content: space-between; font-size: 1rem; color: #a1a5a9; margin-bottom: 0.8rem;
    }
    .text-warning { color: #ffc107 !important; font-weight: 600; }
    .text-muted { color: #6c757d !important; font-style: italic; }
    .border-bottom-subtle { border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; }
    .total-row {
      display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: 1.2rem; color: #fff;
    }
    .total-price { font-size: 2.2rem; color: #e2e8f0; }
  `]
})
export class PriceSummaryComponent {
  bags = input.required<number>();
  floors = input.required<number>();
  bagsToBag = input.required<number>();

  // A nyers matek: (zsák * 1000) + (zsák * emelet * 300) + (zsákolandó zsák * 500)
  rawTotal = computed(() => {
    const b = this.bags() || 0;
    const f = this.floors() || 0;
    const btb = this.bagsToBag() || 0;
    
    return (b * 1000) + (b * f * 300) + (btb * 500);
  });

  // Ha legalább egy adat be van írva és a rawTotal > 0, akkor bekapcsol a 40 000 Ft-os alap.
  basePrice = computed(() => {
    return this.rawTotal() > 0 ? 40000 : 0;
  });

  // A többlet, amennyivel a nyers matek meghaladja a 40 000-et
  extraFee = computed(() => {
    const raw = this.rawTotal();
    return raw > 40000 ? raw - 40000 : 0;
  });

  // A végösszeg: Alapdíj + Többlet
  finalTotal = computed(() => {
    if (this.rawTotal() === 0) return 0;
    return 40000 + this.extraFee();
  });
}
