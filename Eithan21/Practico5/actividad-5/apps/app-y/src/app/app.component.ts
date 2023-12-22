import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MobileNavbarComponent } from '@actividad-5/mobile-navbar';
import { FilterTableComponent } from '@actividad-5/filter-table';
import { PostService } from './services/post/post.service';
import { FilterListComponent } from '@actividad-5/Filter-List';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MobileNavbarComponent, FilterTableComponent, FilterListComponent],
  selector: 'actividad-5-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-y';
  public ListaPosts : any;
  public ListaCol = ['ID', 'Title'];
  constructor (private PostsService:PostService){
  } 
  ngOnInit() {
    this.WebServiceGetPosts();
  }
  public WebServiceGetPosts(){
    this.PostsService.getPosts()
      .subscribe(data =>{
        this.ListaPosts = data;
        console.log(this.ListaPosts);
    })
  }
}
