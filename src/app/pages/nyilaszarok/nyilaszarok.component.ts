import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser'; // ÚJ IMPORTOK

@Component({
  selector: 'app-nyilaszarok',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nyilaszarok.component.html',
  styleUrl: './nyilaszarok.component.scss'
})
export class NyilaszarokComponent implements OnInit {

  // Konstruktor a Meta és Title szolgáltatások beinjektálásához
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    // Böngésző fül címe
    this.title.setTitle('Nyílászárók Szervizelése és Beépítése | TerraMove');

    // Facebook / Open Graph Meta címkék beállítása
    this.meta.updateTag({ property: 'og:title', content: 'Nyílászárók Szervizelése és Beépítése | TerraMove' });
    this.meta.updateTag({ property: 'og:url', content: 'https://terramove.hu/szolgaltatasok/nyilaszarok' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // A MEGOSZTÁSI KÉP (Ide egy abszolút link kell)
    // Kiválasztottam az egyik jól sikerült "utána" képet a csúszkádból
    this.meta.updateTag({ property: 'og:image', content: 'https://terramove.hu/assets/nyilaszaro/cover.webp' }); 
  }

  // Ide jönnek a csúszka képei
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

