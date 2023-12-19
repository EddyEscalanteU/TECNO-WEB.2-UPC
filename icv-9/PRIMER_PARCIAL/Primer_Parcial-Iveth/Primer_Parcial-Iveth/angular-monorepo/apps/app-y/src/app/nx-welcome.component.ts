import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngFor="let item of listaUsers>
  <div class="mobile-container">

  
  <div class="topnav">
    <a href="#home" class="active">Logo</a>
    <div id="myLinks">
      <a > {{item.id}}</a>
      <a >{{item.username}}</a>
      <a >{{item.email}}</a>
    </div>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
  </div>
  </div>

  
  <!-- End smartphone / tablet look -->
  </div>
</div>




  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {

  public listaUsers : any;
  constructor(private usersService: UsersService){
    this.webServiceGetUsers();
  }
  public webServiceGetUsers(){
    this.usersService.GetUsers()
    .subscribe(data =>{
      console.log("data", data);
      this.listaUsers = data;
      console.log("this.listaUsers:", this.listaUsers);
    })
  }
}
