import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CurtainMenuComponent } from '@examen-final-upc/Curtain-Menu';
import { FilterTableComponent } from '@examen-final-upc/Filter_Table';
import { FilterListComponent } from '@examen-final-upc/Filter_List';
import { CardVerticalComponent } from '@examen-final-upc/Card-Vertical';
import { UsersService } from './services/users/users.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CurtainMenuComponent, FilterTableComponent, FilterListComponent, CardVerticalComponent],
  selector: 'examen-final-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appA';
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
