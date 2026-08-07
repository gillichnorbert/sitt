import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  
  // Ezt a listát használjuk a betöltött képek nyomon követésére
  loadedImages = new Set<string>();

  galleryItems = [
    {
      title: 'Sittszállítás és Lomtalanítás',
      desc: 'Építési törmelék és felgyülemlett lomok teljes körű elszállítása. A káoszból tiszta, rendezett területet varázsolunk pillanatok alatt.',
      iconPath: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0',
      activeIdx: 0,
      images: [
        { before: 'assets/sittszallitas/before_1.jpeg', after: 'assets/sittszallitas/after_1.jpeg', value: 50 },
        { before: 'assets/sittszallitas/before_2.webp', after: 'assets/sittszallitas/after_2.webp', value: 50 },
        { before: 'assets/sittszallitas/before_3.jpeg', after: 'assets/sittszallitas/after_3.jpeg', value: 50 },
        { before: 'assets/sittszallitas/before_4.webp', after: 'assets/sittszallitas/after_4.webp', value: 50 },
        { before: 'assets/sittszallitas/before_5.webp', after: 'assets/sittszallitas/after_5.webp', value: 50 },
        { before: 'assets/sittszallitas/before_6.webp', after: 'assets/sittszallitas/after_6.webp', value: 50 },
        { before: 'assets/sittszallitas/IMG_6643.webp' },
        { before: 'assets/sittszallitas/IMG_6635.webp' },
      ]
    },
    {
      title: 'GÉPI FÖLDMUNKA / ANYAGMOZGATÁS',
      desc: 'Teljes tereprendezés, alapásás és szintezés. A felesleges föld kitermelése és azonnali, nyom nélküli elszállítása.',
      iconPath: 'M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3',
      activeIdx: 0,
      images: [
        { before: 'assets/foldmunka/IMG_5523.webp' },
        { before: 'assets/foldmunka/IMG_5522.webp' } 
      ]
    },
    {
      title: 'ÁRUSZÁLLÍTÁS / TEHERFUVAROZÁS',
      desc: 'Elhanyagolt pincék, padlások és hagyatékok szakszerű kiürítése. Nem hagyunk magunk után mást, csak az üres teret.',
      iconPath: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
      activeIdx: 0,
      images: [
        { before: 'assets/aruszallitas/aru1.webp'},
        { before: 'assets/aruszallitas/aru2.webp'},
        { before: 'assets/aruszallitas/folyamat-szallitas.webp'},
        { before: 'assets/aruszallitas/aru3.webp'},
        { before: 'assets/aruszallitas/folyamat-celba-eres.webp'},
        { before: 'assets/aruszallitas/folyamat-rakodas.webp'},
      ]
    },
    {
      title: 'NYÍLÁSZÁRÓK SZERVIZELÉSE',
      desc: 'Régi elöregedett ablakok cseréje. A bontástól az új műanyag nyílászáró milliméterpontos beépítéséig és a törmelék elszállításáig.',
      iconPath: 'M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
      activeIdx: 0,
      images: [
        { before: 'assets/nyilaszaro/IMG_1095.webp'},
        { before: 'assets/nyilaszaro/IMG_1096.webp'},
        { before: 'assets/nyilaszaro/IMG_1321.webp'},
        { before: 'assets/nyilaszaro/IMG_1336.webp'},
        { before: 'assets/nyilaszaro/IMG_1334.webp'},
        { before: 'assets/nyilaszaro/IMG_1331.webp'},
      ]
    }
  ];

  updateSlider(event: any, categoryIndex: number) {
    const activeImageIndex = this.galleryItems[categoryIndex].activeIdx;
    this.galleryItems[categoryIndex].images[activeImageIndex].value = event.target.value;
  }

  setActiveImage(categoryIndex: number, imageIndex: number) {
    this.galleryItems[categoryIndex].activeIdx = imageIndex;
  }

  // ÚJ: Ezt a függvényt hívjuk meg, ha egy kép betöltött
  onImageLoad(url: string | undefined) {
    if (url) {
      this.loadedImages.add(url);
    }
  }

  // ÚJ: Ezzel ellenőrizzük, hogy betöltött-e a kép
  isLoaded(url: string | undefined): boolean {
    if (!url) return true; // Ha nincs kép, nincs mit tölteni
    return this.loadedImages.has(url);
  }
}