import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import{TablaFiltradoComponent} from'libs/tabla-filtrado/src/lib/tabla-filtrado/tabla-filtrado.component';
import{CurtainMenuComponent} from'libs/curtain-menu/src/lib/curtain-menu/curtain-menu.component';
import { ComentsService } from './services/coments/coments.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,TablaFiltradoComponent,CurtainMenuComponent,CommonModule],
  selector: 'monorepo-upc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-z';
  public listaComments: any;

  public listaCol = ['IDE'];

  constructor(private commentsService: ComentsService) {
    this.WebServiceGetComment();
  }

  public WebServiceGetComment() {
    this.commentsService.GetComments()
      .subscribe(data => {
        //console.log("data:", data);
        this.listaComments = data;
        console.log("this.listaComments:", this.listaComments);
      })

  }

}
