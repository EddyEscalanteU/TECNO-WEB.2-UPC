import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MegaMenuComponent } from '@examen-final-upc/mega_menu';
import { FilterListsComponent } from '@examen-final-upc/filter-lists';
import { FilterTableComponent } from '@examen-final-upc/filter-table';
import {CardViewVerticalComponent} from '@examen-final-upc/card-view-vertical'
import {CardViewHorizontalComponent} from '@examen-final-upc/card-view-horizontal'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MegaMenuComponent, FilterListsComponent, FilterTableComponent, CardViewVerticalComponent, CardViewHorizontalComponent],
  selector: 'examen-final-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-b';
}
