import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FilterTableComponent } from '@examen-final-upc/filter-table';
import { FilterListsComponent } from '@examen-final-upc/filter-lists';
import { CurtainMenuComponent } from '@examen-final-upc/curtain-menu';
import { CardViewVerticalComponent } from '@examen-final-upc/card-view-vertical';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CurtainMenuComponent,FilterTableComponent,FilterListsComponent,CardViewVerticalComponent ],
  selector: 'examen-final-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-a';
}
