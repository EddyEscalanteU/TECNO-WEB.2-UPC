import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  public baseUrl = "https://jsonplaceholder.typicode.com/albums";

  constructor(private httpClient: HttpClient) { }

  public GetAlbums(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

}
