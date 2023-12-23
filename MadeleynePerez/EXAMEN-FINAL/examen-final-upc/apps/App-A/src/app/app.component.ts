import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {CurtainMenuComponent} from '@angular-monorepo/curtain_menu'
import {FiltrarTablaComponent} from '@angular-monorepo/Filtrar_tabla'
import {FiltrarListaComponent} from '@angular-monorepo/filtrar-lista'
import { UsersService } from './services/users/users.service';
import { CommonModule } from '@angular/common';
import {CardviewVerticalComponent} from '@angular-monorepo/cardview-vertical';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule,CurtainMenuComponent
  ,FiltrarTablaComponent,FiltrarListaComponent,CardviewVerticalComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App-A';
  
  public listaUsuario: any;

  public listaCol =['IDE','NOMBRE', 'CORREO'];
  
  
}
