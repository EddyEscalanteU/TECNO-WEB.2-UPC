import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CurtainMenuComponent } from '@actividad-5/curtain-menu';
import { FilterTableComponent } from '@actividad-5/filter-table';
import { CommentsService } from './services/comments/comments.service';
import { FilterListComponent } from '@actividad-5/Filter-List';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CurtainMenuComponent, FilterTableComponent, FilterListComponent],
  selector: 'actividad-5-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-z';
  public ListaComments : any;
  public ListaCol = ['ID', 'NAME'];
  constructor (private CommentsService:CommentsService){
  } 
  ngOnInit() {
    this.WebServiceGetComments();
  }
  public WebServiceGetComments(){
    this.CommentsService.getComments()
      .subscribe(data =>{
        this.ListaComments = data;
        console.log(this.ListaComments);
    })
  }
}
