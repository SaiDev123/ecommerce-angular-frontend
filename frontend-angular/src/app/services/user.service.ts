import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

   BASE_URL="http://localhost:10899/user/";

  constructor(private httpClient:HttpClient) { }

   registerUser(user:any){
   return this.httpClient.post(`${this.BASE_URL}register`,user);
   }

   loginAUser(user:any){

    return this.httpClient.post(`${this.BASE_URL}login`,user);

   }

   isLoggedIn(){
     if(localStorage.getItem('token') == null){
       return false;
     }
     else
     {
       return true;
     }
  }

}
