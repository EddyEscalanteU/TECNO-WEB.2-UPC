import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public baseUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000";
  constructor(private httpClient:HttpClient) { 
    
  }
  public getPokemons(): Observable<any> { 
    return this.httpClient.get(this.baseUrl); 
   }
}
