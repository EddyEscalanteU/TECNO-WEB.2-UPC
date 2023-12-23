import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'examen-final-upc-filter-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Filter_List.component.html',
  styleUrl: './Filter_List.component.css',
})
export class FilterListComponent {
  @Input() ListaFilas : any = ['1', 'David'];

}
