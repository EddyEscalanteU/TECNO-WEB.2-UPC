import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavBarComponent } from 'libs/nav-bar/src/lib/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import{TablaFiltradoComponent} from'libs/tabla-filtrado/src/lib/tabla-filtrado/tabla-filtrado.component';
import { PostService } from './services/post/post.service';

@Component({
  standalone: true,
  imports: [NavBarComponent,NavBarComponent,CommonModule,NxWelcomeComponent, RouterOutlet, RouterLink, RouterLinkActive, RouterModule,TablaFiltradoComponent],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-y';

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   public listaPost: any;

   public listaCol = ['IDE'];
 
   constructor(private postService: PostService) {
     this.WebServiceGetPost();
   }
 
   public WebServiceGetPost() {
     this.postService.GetPost()
       .subscribe(data => {
         //console.log("data:", data);
         this.listaPost = data;
         console.log("this.listaPost:", this.listaPost);
       })
 
   }
}
