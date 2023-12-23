import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'examen-final-upc-filter-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.css',
})
export class FilterTableComponent {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() listaColumnas: any =['ID', 'EMAIL']
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() listaFilas: any= [{id:1, email:'name1'},{id:2, email:'name2'}]
  
}
