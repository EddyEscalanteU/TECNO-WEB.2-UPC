import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsService } from './services/comments/comments.service';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template:
  
  `
<div *ngFor="let item of listaComments>
  <div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <div class="overlay-content">
    <a>About</a>
    <a>{{item.id}}</a>
    <a>{{item.name}}</a>
    <a>{{item.email}}</a>
  </div>
</div>

<h2>Fullscreen Overlay Nav Example</h2>
<p>Click on the element below to open the fullscreen overlay navigation menu.</p>
<p>In this example, the navigation menu will slide in, from left to right:</p>
<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
</div>

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  public listadoComments: any;
  constructor(private commentsService :CommentsService){
    this.webServiceGetComments();

  }
  public webServiceGetComments(){
    this.commentsService.GetComment()
    .subscribe(data =>{
      //onsole.log("data", data);
      this.listadoComments = data;
      console.log("this.listadoComments:", this.listadoComments);
    })
  }

}
