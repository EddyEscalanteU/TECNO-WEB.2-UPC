import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  public baseUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public GetPost(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
