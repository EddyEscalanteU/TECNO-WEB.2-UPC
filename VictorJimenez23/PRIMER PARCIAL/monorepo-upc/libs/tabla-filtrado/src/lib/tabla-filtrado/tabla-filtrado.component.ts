import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'monorepo-upc-tabla-filtrado',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './tabla-filtrado.component.html',
  styleUrl: './tabla-filtrado.component.css',
})
export class TablaFiltradoComponent {
  
  @Input() listaColumnas: any = ['COLUMNA 1'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() listaFilas: any = [{ id: 1 }, { id: 2}];
}
