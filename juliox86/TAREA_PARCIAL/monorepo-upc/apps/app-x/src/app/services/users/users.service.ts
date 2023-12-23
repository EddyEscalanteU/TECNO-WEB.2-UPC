import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public baseUrl="https://jsonplaceholder.typicode.com/users"

  constructor(private httpClient: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public GetUsuarios(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }


}
