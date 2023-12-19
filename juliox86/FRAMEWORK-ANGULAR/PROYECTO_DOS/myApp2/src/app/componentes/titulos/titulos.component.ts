import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulos',
  standalone: true,
  imports: [],
  templateUrl: './titulos.component.html',
  styleUrl: './titulos.component.css'
})
export class TitulosComponent {



  @Input() myTitulo: string="VACIO";
}
