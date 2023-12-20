import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';
import{TablaFiltradoComponent} from'libs/tabla-filtrado/src/lib/tabla-filtrado/tabla-filtrado.component';
import{MegaMenuComponent} from'libs/mega-menu/src/lib/mega-menu/mega-menu.component';
import { UsersService } from './services/users/users.service';
@Component({
  standalone: true,
  imports: [MegaMenuComponent,CommonModule,NxWelcomeComponent, RouterOutlet, RouterLink, RouterLinkActive, RouterModule,TablaFiltradoComponent],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-x';
 public listadoUsuarios: any;
 public listaCol = ['IDE'];
 constructor(private usersService: UsersService) {
  this.WebServiceGetUsuarios();
}
  
  public WebServiceGetUsuarios(){
    this.usersService.getUsers()
      .subscribe(data => {
        this.listadoUsuarios = data;
        console.log(this.listadoUsuarios);
      })
  }

}
