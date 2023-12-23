import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CurtainMenuComponent } from '@monorepo-upc/curtain-menu';
import { FilterTableComponent } from '@monorepo-upc/filter-table';
import { CommentsService } from './services/comments/comments.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CurtainMenuComponent, FilterTableComponent, CommonModule],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-z';


   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   public listaComments: any; 

   public listaCol = ['ID', 'NOMBRE', 'EMAIL'];
  constructor(private commentsService:CommentsService){
    this.WebServiceGetComment();
   }

   public WebServiceGetComment(){
    this.commentsService.GetComments()
    .subscribe(data=>{
      this.listaComments=data;
      console.log("this.listaComments:", this.listaComments);
    })


  }


}
