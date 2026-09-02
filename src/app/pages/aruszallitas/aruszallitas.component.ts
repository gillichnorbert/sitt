import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Jól jön, ha használsz *ngFor-t a HTML-ben
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser'; // ÚJ IMPORTOK

@Component({
  selector: 'app-aruszallitas',
  standalone: true,
  imports: [CommonModule, RouterModule], // Hozzáadva az alap modulok
  templateUrl: './aruszallitas.component.html',
  styleUrl: './aruszallitas.component.scss'
})
export class AruszallitasComponent implements OnInit {

  // Konstruktor a Meta és Title szolgáltatások beinjektálásához
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    // Böngésző fül címe
    this.title.setTitle('Áruszállítás és Teherfuvarozás | TerraMove');

    // Facebook / Open Graph Meta címkék beállítása
    this.meta.updateTag({ property: 'og:title', content: 'Áruszállítás és Teherfuvarozás | TerraMove' });
    this.meta.updateTag({ property: 'og:url', content: 'https://terramove.hu/szolgaltatasok/aruszallitas' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // A MEGOSZTÁSI KÉP (Ide egy abszolút link kell)
    this.meta.updateTag({ property: 'og:image', content: 'https://terramove.hu/assets/aruszallitascover.webp' }); 
  }

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