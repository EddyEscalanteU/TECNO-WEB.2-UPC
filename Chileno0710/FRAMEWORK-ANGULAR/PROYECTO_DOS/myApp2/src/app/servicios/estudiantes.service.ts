import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  public baseUrl = "http://localhost:3000/ESTUDIANTES";
  //public baseUrl = "https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10";

  constructor(private httpClient: HttpClient) { }

  public getEstudiantes(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

}
