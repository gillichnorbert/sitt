import { Routes } from '@angular/router';

// Fő komponensek
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ServicesComponent } from './components/services/services.component';

// Új szolgáltatás aloldalak importálása 
// (Ellenőrizd az elérési utakat, hogy nálad pontosan hol vannak a mappák!)
import { SittszallitasComponent } from './pages/sittszallitas/sittszallitas.component';
import { AruszallitasComponent } from './pages/aruszallitas/aruszallitas.component';
import { FoldmunkaComponent } from './pages/foldmunka/foldmunka.component';
import { GalleryComponent } from './components/gallery/gallery.component';

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
    component: SittszallitasComponent, 
    title: 'Sittszállítás és Lomtalanítás | TerraMove' 
  },
  { 
    path: 'szolgaltatasok/aruszallitas', 
    component: AruszallitasComponent, 
    title: 'Áruszállítás és Teherfuvarozás | TerraMove' 
  },
  { 
    path: 'szolgaltatasok/foldmunka', 
    component: FoldmunkaComponent, 
    title: 'Gépi Földmunka és Anyagmozgatás | TerraMove' 
  },

  // Árak oldal
  { 
    path: 'araink', 
    component: PricesComponent, 
    title: 'Áraink | Földmunka, Szállítás és Szerviz | TerraMove' 
  },
  {
    path: 'galeria',
    component: GalleryComponent,
    title: 'Galéria | TerraMove'
  },

  // Hibás URL esetén visszadob a főoldalra (404-es hiba elkerülése)
  {
    path: '**',
    redirectTo: ''
  }
];