import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ServicesComponent } from './components/services/services.component'; // IMPORTÁLNI!

export const routes: Routes = [
  { path: 'kezdolap', component: HomeComponent },
  { path: 'araink', component: PricesComponent },
  { path: 'szolgaltatasok', component: ServicesComponent }, // ÚJ ÚTVONAL
  { path: '**', redirectTo: '/kezdolap' }
];