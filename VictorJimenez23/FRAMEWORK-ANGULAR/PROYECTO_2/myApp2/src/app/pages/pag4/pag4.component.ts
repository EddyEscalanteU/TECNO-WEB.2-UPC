import { Component } from '@angular/core';
import { MateriasService} from '../../servicios/materias-service.service';
import { Router } from 'express';
import { CommonModule } from '@angular/common';
import { TitulosComponent } from '../../componetes/titulos/titulos.component';
import { BottonUpcComponent } from '../../componentes/botton-upc/botton-upc.component';

@Component({
  selector: 'app-pag4',
  standalone: true,
  imports: [CommonModule, TitulosComponent,BottonUpcComponent],
  templateUrl: './pag4.component.html',
  styleUrl: './pag4.component.scss'
})
export class Pag4Component {
 materias: any;


  constructor(private MateriasService: MateriasService,){
    
  } 
  ngOnInit() {
    this.WebServiceGetMaterias();
  }
  public WebServiceGetMaterias(){
    this.MateriasService.getMaterias()
      .subscribe(data => {
        this.materias = data;
        console.log(this.materias);
      })
  }
   
   
}
