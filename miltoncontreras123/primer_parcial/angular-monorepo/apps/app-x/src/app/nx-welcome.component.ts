import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts/posts.service';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
   
<div *ngFor="let item of listaPosts">
<div class="topnav">
<a href="#home" class="active">Logo</a>
<div id="myLinks">
  <a>{{item.id}}</a>
  <a>{{item.title}}</a>
  <a>{{item.body}}</a>
</div>
<a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="fa fa-bars"></i>
</a>
</div>
</div>

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  public listadoPosts: any;
  constructor(private postsService :PostsService){
    this.webServiceGetPosts();

  }
  public webServiceGetPosts(){
    this.postsService.GetPosts()
    .subscribe(data =>{
      //onsole.log("data", data);
      this.listadoPosts = data;
      console.log("this.listadoPosts:", this.listadoPosts);
    })
  }

}
