import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EstudiantesService } from '../../servicios/estudiantes.service';
import { TitulosComponent } from '../../componentes/titulos/titulos.component';
import { BottonUpcComponent } from '../../componentes/botton-upc/botton-upc.component';

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [
    CommonModule, 
    TitulosComponent, 
    BottonUpcComponent
  ],
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.css'
})
export class Pag1Component {

  estudiantes: any;

  constructor(private estudiantesService:EstudiantesService){
    this.WebServiceGeEstudiantes();
  }
  public WebServiceGeEstudiantes(){
    this.estudiantesService.getEstudiantes()
    .subscribe(data=> {
    //  console.log("data:", data);
      this.estudiantes = data;
      console.log("this.estudiantes:", this.estudiantes);
    })
  }

}
