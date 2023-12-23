import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CurtainMenuComponent } from '@examen-final-upc/curtain-menu';
import { FilterTableComponent } from '@examen-final-upc/filter-table';
import { FilterListComponent } from '@examen-final-upc/filter-list';
import { UsersService } from './services/users/users.service';
import { CommonModule } from '@angular/common';
import { CardViewVerticalComponent } from '@examen-final-upc/card-view-vertical';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CurtainMenuComponent, FilterTableComponent, 
    FilterListComponent, CommonModule, CardViewVerticalComponent],
  selector: 'examen-final-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-a';

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   public listaUsuarios: any; 

  public listaCol = ['IDE'];

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
