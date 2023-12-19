import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public baseUrl = "https://jsonplaceholder.typicode.com/albums";

  

  constructor( private httpClient: HttpClient)  { }
  
  public getAlbums(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
}

}
