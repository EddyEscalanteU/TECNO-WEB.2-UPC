import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavBarComponent } from './libs/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import{TablaFiltradoComponent} from'libs/tabla-filtrado/src/lib/tabla-filtrado/tabla-filtrado.component';

@Component({
  standalone: true,
  imports: [NavBarComponent,CommonModule,NxWelcomeComponent, RouterOutlet, RouterLink, RouterLinkActive, RouterModule,TablaFiltradoComponent],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-y';
}
