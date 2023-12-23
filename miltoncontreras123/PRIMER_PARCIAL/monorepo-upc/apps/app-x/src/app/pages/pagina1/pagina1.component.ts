import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTableComponent } from '@monorepo-upc/filter-table';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'monorepo-upc-pagina1',
  standalone: true,
  imports: [CommonModule, FilterTableComponent],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css',
})
export class Pagina1Component {

  public listaColum = ['COL id', 'COL titulo', 'COL correo']
  //public listaFilas = [{ id: 1, name: 'nombre1' }, { id: 2, name: 'nombre2' }]

  public listaColum2 = ['COL IDE', 'COL TITLE', 'COL EMAIL']
  //public listaFilas2 = [{ id: 1, name: 'nombre111111' }, { id: 2, name: 'nombre22222' }]

  public listaAlbums: any;
  public listaPhotos: any;
  public listaTodos: any;

  constructor(private usersService: UsersService) {
    this.WebServiceGetAlbums();
    this.WebServiceGetPhotos();
    this.WebServiceGetTodos();
  }


  public WebServiceGetAlbums() {
    this.usersService.GetUsuarios()
      .subscribe(data => {
        //console.log("data:", data);
        this.listaAlbums = data;
        console.log("this.listaAlbums:", this.listaAlbums);
      })

  }

  public WebServiceGetPhotos() {
    this.usersService.GetUsuarios()
      .subscribe(data => {
        //console.log("data:", data);
        this.listaPhotos = data;
        console.log("this.listaPhotos:", this.listaPhotos);
      })

  }

  public WebServiceGetTodos() {
    this.usersService.GetUsuarios()
      .subscribe(data => {
        //console.log("data:", data);
        this.listaTodos = data;
        console.log("this.listaTodos:", this.listaTodos);
      })

  }


}
