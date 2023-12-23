import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MegaMenuComponent } from '@monorepo-upc/mega-menu';
import { FilterTableComponent } from '@monorepo-upc/filter-table';
import { UsersService } from './services/users/users.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MegaMenuComponent, FilterTableComponent,CommonModule],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-x';

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   public listaUsuarios: any; 

  public listaCol = ['ID', 'NOMBRE'];

  constructor(private usersService:UsersService){
   this.WebServiceGetUsuarios();
  }

  public WebServiceGetUsuarios(){
    this.usersService.GetUsuarios()
    .subscribe(data=>{
      this.listaUsuarios=data;
      console.log("this.listaUsuarios:", this.listaUsuarios);
    })


  }




}
