import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesService } from '../../servicios/estudiantes.service';
import { TitulosComponent } from '../../componetes/titulos/titulos.component';
import { BottonUpcComponent } from '../../componentes/botton-upc/botton-upc.component';

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [CommonModule, 
            TitulosComponent,
            BottonUpcComponent
          ],
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.scss'
})
export class Pag1Component {

estudiantes:any;
 constructor(private estudiantesService:EstudiantesService){
  this.WebServiceGetMaterias();
 }
  public WebServiceGetMaterias(){
    this.estudiantesService.getEstudiantes()
      .subscribe(data => {
        this.estudiantes = data;
        console.log(this.estudiantes);
      })
  }
}
