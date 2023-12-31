import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'actividad-5-filter-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.css',
})
export class FilterTableComponent {
  @Input() ListaColumnas : any = ['ID', 'NOMBREE'];
  @Input() ListaFilas : any;
}
