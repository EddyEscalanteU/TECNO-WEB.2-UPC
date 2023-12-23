import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MobileNavbarComponent } from '@examen-final-upc/mobile-navbar';
import { FilterTableComponent } from '@examen-final-upc/filter-table';
import { FilterListsComponent } from '@examen-final-upc/filter-lists';
import { CardViewHorizontalComponent } from '@examen-final-upc/card-view-horizontal';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MobileNavbarComponent, FilterTableComponent, FilterListsComponent, CardViewHorizontalComponent],
  selector: 'examen-final-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-c';
}
