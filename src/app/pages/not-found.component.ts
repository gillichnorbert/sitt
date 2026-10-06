import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector: 'app-not-found', standalone: true, imports: [RouterLink], template: `<section class="container py-5"><h1>404 – Az oldal nem található</h1><p>Lehet, hogy a cím megváltozott vagy elírás történt.</p><a routerLink="/">Vissza a főoldalra</a> · <a routerLink="/szolgaltatasok">Szolgáltatások</a></section>`})
export class NotFoundComponent {}
