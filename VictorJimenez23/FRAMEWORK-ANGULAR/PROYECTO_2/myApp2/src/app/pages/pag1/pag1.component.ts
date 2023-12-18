import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesService } from '../../servicios/estudiantes.service';

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [CommonModule],
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
