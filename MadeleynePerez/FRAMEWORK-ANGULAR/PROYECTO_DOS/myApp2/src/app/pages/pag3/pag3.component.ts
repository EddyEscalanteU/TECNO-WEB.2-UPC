import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TitulosComponent } from '../../componentes/titulos/titulos.component';

@Component({
  selector: 'app-pag3',
  standalone: true,
  imports: [CommonModule, TitulosComponent],
  templateUrl: './pag3.component.html',
  styleUrl: './pag3.component.css'
})
export class Pag3Component {

}
