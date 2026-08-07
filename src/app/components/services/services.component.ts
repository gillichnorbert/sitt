import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // EZT IMPORTÁLNI KELLETT A LINKEKHEZ
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive'; 

@Component({
  selector: 'app-services',
  standalone: true,
  // HOZZÁADVA A ROUTERMODULE
  imports: [ScrollRevealDirective, RouterModule], 
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'Sittszállítás és lomtalanítás',
      desc: 'Építkezések, felújítások utáni sitt, valamint feleslegessé vált bútorok, lomok, hagyatékok gyors és szakszerű elszállítása kézi rakodással.',
      iconPath: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0',
      url: 'sittszallitas' // HOZZÁADVA
    },
    {
      title: 'Áruszállítás / Teherfuvarozás',
      desc: 'Megbízható és gyors áruszállítás, teherfuvarozás. Legyen szó bútorokról, építőanyagokról vagy egyéb nagyméretű tárgyakról.',
      iconPath: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
      url: 'aruszallitas' // HOZZÁADVA
    },
{
      title: 'Gépi földmunka / Anyagmozgatás',
      desc: 'Professzionális gépi földmunkák, tereprendezés, alapásás és nehéz építőanyagok hatékony mozgatása az építési területen.',
      iconPath: 'M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3',
      url: 'foldmunka'
    },
    {
      title: 'Nyílászárók szervizelése',
      desc: 'Ablakok és ajtók szakszerű beépítése, beállítása, valamint meglévő nyílászárók javítása, szigetelése és teljes körű karbantartása.',
      iconPath: 'M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
      url: 'nyilaszarok' // HOZZÁADVA
    }
  ];
}