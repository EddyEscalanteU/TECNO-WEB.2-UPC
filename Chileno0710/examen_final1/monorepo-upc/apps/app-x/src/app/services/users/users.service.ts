import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public baseUrl = "https://jsonplaceholder.typicode.com/users";
  public baseUrl1 = "https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5";
  public baseUrl2 = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5";
  public baseUrl3 = "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5";

  constructor(private httpClient: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public GetUsuarios(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public GetAlbums(): Observable<any> {
    return this.httpClient.get(this.baseUrl1);
  }

  public GetPhotos(): Observable<any> {
    return this.httpClient.get(this.baseUrl2);
  }

  public GetTodos(): Observable<any> {
    return this.httpClient.get(this.baseUrl3);
  }
}
