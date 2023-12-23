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
@Input() listaColumnas:any=['COLUMNA 1'];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
@Input() listaFilas:any=[{id: 1 }, [{id: 2}]]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
fila: any;

}
