import { Component } from '@angular/core';
import { MateriasService } from '../../servicios/materias-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pag4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pag4.component.html',
  styleUrl: './pag4.component.scss'
})
export class Pag4Component {

  materias: any;


  constructor(private materiasService: MateriasService,) {
    console.log("PRIMERO");
  }

  ngOnInit() {
    console.log("SEGUNDO");
    this.WebServiceGetMaterias();
  }

  public WebServiceGetMaterias() {
    this.materiasService.getMaterias()
      .subscribe(data => {
        this.materias = data;
        console.log("OK:", this.materias);
      })
  }
}
