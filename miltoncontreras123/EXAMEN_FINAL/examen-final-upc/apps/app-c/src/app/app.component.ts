import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MobileNavbaComponent } from '@examen-final-upc/mobile_navba';
import { FilterListsComponent } from '@examen-final-upc/filter-lists';
import { FilterTableComponent } from '@examen-final-upc/filter-table';
import {CardViewHorizontalComponent} from '@examen-final-upc/card-view-horizontal'



@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MobileNavbaComponent, FilterListsComponent, FilterTableComponent, CardViewHorizontalComponent],
  
  selector: 'examen-final-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-c';
}
