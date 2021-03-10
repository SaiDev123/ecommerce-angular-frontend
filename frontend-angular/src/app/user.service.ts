import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) { }
  usernameCheck(username:any){
    return this.httpClient.post("http://localhost:10899/user/checkusername",username);
  }
}
