import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-foldmunka',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './foldmunka.component.html',
  styleUrl: './foldmunka.component.scss'
})
export class FoldmunkaComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    // Böngésző fül címe
    this.title.setTitle('Gépi Földmunka és Tereprendezés | TerraMove');

    // Facebook / Open Graph Meta címkék beállítása
    this.meta.updateTag({ property: 'og:title', content: 'Gépi Földmunka és Tereprendezés | TerraMove' });
    this.meta.updateTag({ property: 'og:url', content: 'https://terramove.hu/szolgaltatasok/foldmunka' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // A MEGOSZTÁSI KÉP (Ide egy abszolút link kell)
    // Cseréld ki arra a képre, amit a földmunkához szeretnél használni!
    this.meta.updateTag({ property: 'og:image', content: 'https://terramove.hu/assets/foldmunka/IMG_5522.webp' }); 
  }
}