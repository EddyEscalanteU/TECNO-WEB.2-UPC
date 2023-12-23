import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public baseUrl = "https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient:HttpClient) { 
    
  }
  public getUsuarios(): Observable<any> { 
    return this.httpClient.get(this.baseUrl); 
   }
}
