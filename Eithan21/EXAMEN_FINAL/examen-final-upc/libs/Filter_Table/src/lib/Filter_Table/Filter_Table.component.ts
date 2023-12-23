import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'examen-final-upc-filter-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Filter_Table.component.html',
  styleUrl: './Filter_Table.component.css',
})
export class FilterTableComponent {
  @Input() ListaColumnas : any = ['ID', 'NOMBREE'];
  @Input() ListaFilas : any;
}
