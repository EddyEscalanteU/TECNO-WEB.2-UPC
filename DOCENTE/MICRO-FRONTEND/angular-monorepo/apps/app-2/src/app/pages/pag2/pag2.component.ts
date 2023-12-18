import { AlbumService } from './../../services/album/album.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-pag2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pag2.component.html',
  styleUrl: './pag2.component.css',
})
export class Pag2Component {

  public listaAlbum : any;

  constructor(private albumService: AlbumService ){
    this.WebServiceGetAlbum();
  }

  public WebServiceGetAlbum() {
    this.albumService.GetAlbums()
      .subscribe(data => {
        //console.log("data:", data);
        this.listaAlbum = data;
        console.log("this.listaAlbum:", this.listaAlbum);
      })

  }


}
