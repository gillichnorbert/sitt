import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html'
})
export class FaqComponent {
  faqs = [
    { 
      question: 'Kell-e közterület-foglalási engedély sittszállításnál?', 
      answer: 'Nem. A sittszállításhoz nincs szükség közterület-foglalási engedélyre.' 
    },
    { 
      question: 'Vállalnak emeletről fel- és lehordást is?', 
      answer: 'Igen. Igény esetén szakembereink az árut vagy a sittet emeletről is fel- és lehordják.'
    },
    // ÚJ: Lomtalanítás fókuszú kérdés
    { 
      question: 'Raklapos árut is szállítanak?', 
      answer: 'Igen. Raklapos áruk, építőanyagok, bútorok és egyéb csomagok szállítását is vállaljuk.'
    },
    // ÚJ: Lomtalanítás árazása
    { 
      question: 'Hogyan alakul a teherfuvarozás ára?', 
      answer: 'Fuvarozásunk óradíjas vagy egyedi, fix áras ajánlat alapján történik, a szállítás jellegétől függően.'
    },
    // ÚJ: Bútorszerelés
    { 
      question: 'A gépi földmunkákhoz biztosítanak gépkezelőt is?', 
      answer: 'Igen. Minden földmunkát tapasztalt gépkezelővel és korszerű munkagépekkel végzünk.'
    },
    { 
      question: 'A kitermelt, feleslegessé vált föld elszállítását is vállalják?', 
      answer: 'Igen. A kitermelt föld elszállítását és szakszerű elhelyezését is biztosítjuk.'
    },
    { 
      question: 'Műanyag és fa nyílászárókkal is foglalkoznak?', 
      answer: 'Igen. Műanyag és fa nyílászárók szervizelését, javítását és beépítését egyaránt vállaljuk.'
    },
    { 
      question: 'Nyílászárók beépítését is vállalják?', 
      answer: 'Igen. Bejárati ajtók, teraszajtók és ablakok szakszerű beépítését is elvégezzük.'
    },
    { 
      question: 'Mennyi idő a kiszállás?', 
      answer: 'A legtöbb esetben akár aznapi vagy másnapi kiszállást is vállalunk Budapest és Pest vármegye területén.'
    }
  ];
}