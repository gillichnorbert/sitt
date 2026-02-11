import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html'
})
export class FaqComponent {
faqs = [
  { 
    question: 'Kell közterület-foglalási engedély?', 
    answer: 'NEM szükséges! Mivel nem helyezünk ki konténert az utcára, hanem kisteherautóval érkezünk és azonnal megrakodjuk, így megspórolhatja az engedélyeztetés költségét és utánajárását.' 
  },
  { 
    question: 'Vállalnak cipekedést emeletről is?', 
    answer: 'Igen, ez a szolgáltatásunk lényege. Kollégáink kézi erővel lehozzák a zsákokat bármilyen emeletről, akár lift nélküli házból, pincéből vagy nehezen megközelíthető udvarról is.' 
  },
  { 
    question: 'Milyen hulladékot szállítanak el?', 
    answer: 'Tiszta építési törmeléket (beton, tégla, csempe, vakolat) és vegyes hulladékot (lom, fa, műanyag, gipszkarton) is elviszünk. Veszélyes hulladékot (pala, festék, gumiabroncs) nem áll módunkban szállítani.' 
  },
  { 
    question: 'Mennyire gyors a kiszállás?', 
    answer: 'Mivel kisteherautókkal dolgozunk, rugalmasabbak vagyunk a nagy konténereseknél. Kapacitástól függően akár a hívás napján, de legkésőbb 24-48 órán belül megpróbálunk érkezni.' 
  },
  { 
    question: 'Van minimális rendelési mennyiség?', 
    answer: 'Kiszállási díj Budapesten nincs. A minimális fizetendő díj fordulónként 12.000 Ft. Ez akkor is érvényes, ha a elszállítandó mennyiség értéke ennél kevesebb lenne (pl. csak pár zsák).' 
  }
];
}