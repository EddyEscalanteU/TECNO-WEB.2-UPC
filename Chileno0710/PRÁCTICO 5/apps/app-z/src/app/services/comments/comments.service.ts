import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  public baseUrl = "https://jsonplaceholder.typicode.com/comments";
    constructor(private httpClient: HttpClient) { 
  }
  public getComments(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
