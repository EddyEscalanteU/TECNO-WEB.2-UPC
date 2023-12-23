import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MobileNavbarComponent} from '@angular-monorepo/mobile_navbar'
import {FiltrarTablaComponent} from '@angular-monorepo/Filtrar_tabla'
import {FiltrarListaComponent} from '@angular-monorepo/filtrar-lista'
import { CommonModule } from '@angular/common';
//import {UsersService} from './services/users/usuarios.service'
import {CardviewHorizontalComponent} from '@angular-monorepo/cardview-horizontal'


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MobileNavbarComponent
  ,FiltrarTablaComponent,FiltrarListaComponent, CommonModule, CardviewHorizontalComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App-C';
  public listaUsuario: any;
  
    
  }
/*


  constructor(private usuariosService:  UsersService){
    this.WebServiceGetUsuarios();

  }
  public WebServiceGetUsuarios() {
    this.usuariosService.getUsuarios()
    .subscribe((data: any) => {
   this.listaUsuarios = data;  
      console.log("this.listaUsuarios:", this.listaUsuarios);
    })
  }
*/

