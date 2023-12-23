import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public baseUrl = "https://reqres.in/api/users";
  constructor(private httpClient: HttpClient) { 
}
public getUsers(): Observable<any> {
  return this.httpClient.get(this.baseUrl);
}
}
