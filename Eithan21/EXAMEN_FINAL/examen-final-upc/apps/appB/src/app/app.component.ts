import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MegaMenuComponent } from '@examen-final-upc/Mega-Menu';
import { UsersService } from './services/users/users.service';
import { FilterTableComponent } from '@examen-final-upc/Filter_Table';
import { CardVerticalComponent } from '@examen-final-upc/Card-Vertical';
import { CardHorizontalComponent } from '@examen-final-upc/Card-Horizontal';
import { FilterListComponent } from '@examen-final-upc/Filter_List';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MegaMenuComponent,FilterTableComponent,FilterListComponent, CardVerticalComponent, CardHorizontalComponent],
  selector: 'examen-final-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appB';
  public UsersList : any;
  public ListaCol = ['ID', 'NOMBRE', 'APELLIDO', 'EMAIL'];
  constructor (private userservice:UsersService){
  } 
  ngOnInit() {
    this.WebServiceGetUsers();
  }
  public WebServiceGetUsers(){
    this.userservice.getUsers()
      .subscribe(data =>{
        this.UsersList = data.data;
        console.log(this.UsersList);
    })
  }
}
