import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  public baseUrl = "https://jsonplaceholder.typicode.com/photos?_start=1&_end=20";

  

  constructor( private httpClient: HttpClient)  { }
  
  public getPhotos(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
}
}
