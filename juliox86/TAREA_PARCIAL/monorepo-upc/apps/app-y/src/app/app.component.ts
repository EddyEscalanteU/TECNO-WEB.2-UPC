import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MobileNavbarComponent } from '@monorepo-upc/mobile-navbar';
import { FilterTableComponent } from '@monorepo-upc/filter-table';
import { PostService } from './services/post/post.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MobileNavbarComponent, FilterTableComponent, CommonModule],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-y';


   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   public listaPost: any; 

   public listaCol = ['ID', 'NOMBRE'];
  constructor(private postService:PostService){
    this.WebServiceGetPost();
   }

   public WebServiceGetPost(){
    this.postService.GetPost()
    .subscribe(data=>{
      this.listaPost=data;
      console.log("this.listaUsuarios:", this.listaPost);
    })


  }

}
