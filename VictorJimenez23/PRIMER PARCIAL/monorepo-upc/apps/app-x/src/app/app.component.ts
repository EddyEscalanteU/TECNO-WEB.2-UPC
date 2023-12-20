import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';
import { MenuMegaComponent } from './libs/menu-mega/menu-mega.component';
import{TablaFiltradoComponent} from'libs/tabla-filtrado/src/lib/tabla-filtrado/tabla-filtrado.component';
import { UsuariosService } from '../service/usuarios/usuarios.service';
@Component({
  standalone: true,
  imports: [MenuMegaComponent,CommonModule,NxWelcomeComponent, RouterOutlet, RouterLink, RouterLinkActive, RouterModule,TablaFiltradoComponent],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-x';
 public listadoUsuarios: any;
  constructor(private usuariosService: UsuariosService,){
    this.WebServiceGetUsuarios();
  } 
  
  public WebServiceGetUsuarios(){
    this.usuariosService.getUsuarios()
      .subscribe(data => {
        this.listadoUsuarios = data;
        console.log(this.listadoUsuarios);
      })
  }

}
