import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { EstudiantesService } from '../../servicios/estudiantes.service';
import { TitulosComponent } from '../../componentes/titulos/titulos.component';
import { BottonUpcComponent } from '../../componentes/botton-upc/botton-upc.component';

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [CommonModule, 
    TitulosComponent,
  BottonUpcComponent],
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.css'
})
export class Pag1Component {

  public estudiantes!: any;

  constructor( private estudiantesService: EstudiantesService){
    this.WebServiceGetEstudiantes();
  }

  public WebServiceGetEstudiantes(){
    this.estudiantesService.getEstudiantes()
    .subscribe(data => {
   this.estudiantes = data;  
      console.log("OK:", this.estudiantes);
    })
  }
}
