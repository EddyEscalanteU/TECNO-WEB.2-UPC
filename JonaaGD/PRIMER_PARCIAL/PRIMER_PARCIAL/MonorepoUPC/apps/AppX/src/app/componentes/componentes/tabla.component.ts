import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TablaComponent } from '../../componentes/tabla/tabla.component';

@Component({
  selector: 'angular-monorepo-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  
  /*public Tabla: any;

  constructor( private tablaService: TablaComponent){
    this.WebServiceGetTabla();
  }

  public WebServiceGetTabla(){
    this.tablaService.getTabla()
    .subscribe(data => {
   this.tablaService = data;  
      console.log("tablaService", this.tablaService);
    })
  }*/
}
