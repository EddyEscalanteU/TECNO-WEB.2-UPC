import {MateriasService} from '../../servicios/materias-service.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitulosComponent } from '../../componentes/titulos/titulos.component';
import { BottonUpcComponent } from '../../componentes/botton-upc/botton-upc.component';

@Component({
  selector: 'app-pag4',
  standalone: true,
  imports: [CommonModule,
     TitulosComponent,
    BottonUpcComponent],
  templateUrl: './pag4.component.html',
  styleUrl: './pag4.component.css'
})
export class Pag4Component {
    public materias!: any;

  constructor(private materiasService: MateriasService){ 
    console.log("PRIMERO");}

   
    

  ngOnInit() { console.log("Segundo");

  this.WebServiceGetMaterias();

  }
  public WebServiceGetMaterias(){this.materiasService.getMaterias()
    .subscribe(data => {
   this.materias = data;  
      console.log("OK:", this.materias);
    })
  }


}
