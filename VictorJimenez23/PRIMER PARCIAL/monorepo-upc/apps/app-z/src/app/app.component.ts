import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CourtainMenuComponent } from './libs/courtain-menu/courtain-menu.component';
import{TablaFiltradoComponent} from'libs/tabla-filtrado/src/lib/tabla-filtrado/tabla-filtrado.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,CourtainMenuComponent,TablaFiltradoComponent],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-z';
}
