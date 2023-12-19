import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  public baseUrl = "http://localhost:3000/MATERIAS";
  constructor(private httpClient: HttpClient) { }

  public getMaterias(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
