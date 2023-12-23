import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MegaMenuComponent } from '@examen-final-upc/mega-menu';
import { FilterTableComponent } from '@examen-final-upc/filter-table';
import { FilterListComponent } from '@examen-final-upc/filter-list';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users/users.service';
import { CardViewVerticalComponent } from '@examen-final-upc/card-view-vertical';
import { CardViewHorizontalComponent } from '@examen-final-upc/card-view-horizontal';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,MegaMenuComponent, FilterTableComponent, FilterListComponent, CommonModule, CardViewVerticalComponent,CardViewHorizontalComponent],
  selector: 'examen-final-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-B';

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
