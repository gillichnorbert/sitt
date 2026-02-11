import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // IMPORTÁLNI!

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // BETENNI AZ IMPORTS-BA!
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}