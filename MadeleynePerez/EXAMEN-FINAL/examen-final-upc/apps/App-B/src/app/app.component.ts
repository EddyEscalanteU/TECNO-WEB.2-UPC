import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MegaMenuComponent} from '@angular-monorepo/mega-menu'
import {FiltrarTablaComponent} from '@angular-monorepo/Filtrar_tabla'
import {FiltrarListaComponent} from '@angular-monorepo/filtrar-lista'
import {CardviewVerticalComponent} from '@angular-monorepo/cardview-vertical';
import {CardviewHorizontalComponent} from '@angular-monorepo/cardview-horizontal'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MegaMenuComponent
  ,FiltrarTablaComponent,FiltrarListaComponent, CardviewVerticalComponent,CardviewHorizontalComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App-B';
}
