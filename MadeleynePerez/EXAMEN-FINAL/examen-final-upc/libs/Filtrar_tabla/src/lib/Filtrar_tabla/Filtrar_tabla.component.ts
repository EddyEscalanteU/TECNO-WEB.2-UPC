import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-filtrar-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Filtrar_tabla.component.html',
  styleUrl: './Filtrar_tabla.component.css',
})
export class FiltrarTablaComponent {
  
  @Input() listaColumnas: any = ['COLUMNA 1'];

}
