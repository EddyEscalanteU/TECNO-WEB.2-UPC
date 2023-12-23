import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FilterTableComponent } from '@examen-final-upc/Filter_Table';
import { FilterListComponent } from '@examen-final-upc/Filter_List';
import { MovileNavbarComponent } from '@examen-final-upc/Movile-Navbar';
import { CardHorizontalComponent } from '@examen-final-upc/Card-Horizontal';
import { UsersService } from './services/users/users.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MovileNavbarComponent, FilterTableComponent, FilterListComponent, CardHorizontalComponent],
  selector: 'examen-final-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appC';
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
