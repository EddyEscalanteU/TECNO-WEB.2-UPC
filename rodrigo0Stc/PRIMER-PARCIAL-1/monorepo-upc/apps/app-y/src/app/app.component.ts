import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MobileNavbarComponent } from '@monorepo-upc/mobile-navbar';
import { FilterTableComponent } from '@monorepo-upc/filter-table';
import { FilterListComponent } from '@monorepo-upc/filter-list';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post/post.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MobileNavbarComponent, FilterTableComponent, FilterListComponent, CommonModule],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
