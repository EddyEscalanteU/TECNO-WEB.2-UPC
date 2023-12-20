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
  @Input() listaColumna:any;
  @Input() columna2:string="null";
  @Input() columna3:string="null";
}
