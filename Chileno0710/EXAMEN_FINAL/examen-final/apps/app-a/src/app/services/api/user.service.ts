import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

public baserURL = "https://reqres.in/api/users" 

  constructor(private httpClient: HttClient) { }
}
