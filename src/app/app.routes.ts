import { NotFoundComponent } from './pages/not-found.component';
import { Routes } from '@angular/router';

// Fő komponensek
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

// Új szolgáltatás aloldalak importálása 
// (Ellenőrizd az elérési utakat, hogy nálad pontosan hol vannak a mappák!)

export const routes: Routes = [
  // Főoldal
  { 
    path: '', 
    component: HomeComponent, 
    title: 'TerraMove | Sittszállítás és Tehertaxi Rakodással' // Keresőbarát főcím
  },

  
  // SEO szempontból jobb, ha a /kezdolap átirányít a főoldalra, hogy ne legyen duplikált tartalom
  { 
    path: 'kezdolap', 
    redirectTo: '',
    pathMatch: 'full'
  },
  
  // Fő szolgáltatások gyűjtőoldala
  { 
    path: 'szolgaltatasok', 
    component: ServicesComponent, 
    title: 'Szolgáltatásaink | TerraMove' 
  },

  // --- ÚJ SZOLGÁLTATÁS ALOLDALAK ---
  { 
    path: 'szolgaltatasok/sittszallitas', 
    loadComponent: () => import('./pages/sittszallitas/sittszallitas.component').then(m => m.SittszallitasComponent), 
    title: 'Sittszállítás és Lomtalanítás | TerraMove' 
  },
  { 
    path: 'szolgaltatasok/aruszallitas', 
    loadComponent: () => import('./pages/aruszallitas/aruszallitas.component').then(m => m.AruszallitasComponent), 
    title: 'Áruszállítás és Teherfuvarozás | TerraMove' 
  },
  { 
    path: 'szolgaltatasok/foldmunka', 
    loadComponent: () => import('./pages/foldmunka/foldmunka.component').then(m => m.FoldmunkaComponent), 
    title: 'Gépi Földmunka és Anyagmozgatás | TerraMove' 
  },

  // Árak oldal
  { 
    path: 'araink', 
    loadComponent: () => import('./components/prices/prices.component').then(m => m.PricesComponent), 
    title: 'Áraink | Földmunka, Szállítás és Szerviz | TerraMove' 
  },
  {
    path: 'galeria',
    loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Galéria | TerraMove'
  },

  // Hibás URL: külön hibaoldal; HTTP 404 státuszt a szerver ad.
  {
    path: '**',
    component: NotFoundComponent
  }
];