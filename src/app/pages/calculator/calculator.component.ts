import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagFloorInputComponent } from '../../components/bag-floor-input/bag-floor-input.component';
import { PriceSummaryComponent } from '../../components/price-summary/price-summary.component';


@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, BagFloorInputComponent, PriceSummaryComponent],
  template: `
    <section class="calculator-wrapper py-5 bg-light">
      <div class="container">
        <h1 class="text-center mb-4 font-weight-bold">Zsákos sittszállítás díjkalkulátor</h1><p class="text-center">Tájékoztató becslés. A végleges díj a rakománytól és a helyszíntől is függ. <a href="/araink">Áraink</a> · <a href="tel:+36707287316">Pontos ajánlat kérése</a></p>
        
        <div class="row g-4 align-items-stretch">
          <div class="col-12 col-lg-7">
            <app-bag-floor-input 
              [(bags)]="numberOfBags" 
              [(floors)]="numberOfFloors"
              [(bagsToBag)]="amountToBag"
            />
          </div>

          <div class="col-12 col-lg-5">
            <app-price-summary 
              [bags]="numberOfBags()" 
              [floors]="numberOfFloors()"
              [bagsToBag]="amountToBag()"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .calculator-wrapper { min-height: 100vh; background-color: #f4f6f8; font-family: system-ui, -apple-system, sans-serif; }
    h2 { color: #2b2b2b; }
  `]
})
export class CalculatorComponent {
  numberOfBags = signal<number>(0);
  numberOfFloors = signal<number>(0);
  amountToBag = signal<number>(0);
}
