import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  
  intercept(req:any, next:any){

    console.log('interceptor called',req);
    //console.log("request",req);
    console.log("intercepting.....")
    let userService=this.injector.get(UserService);
    console.log(userService);
    console.log(userService.getToken());
 let tokenizedReq= req.clone({
   setHeaders: {
     Authorization: `Bearer ${userService.getToken()} ` 
   }
 })

 console.log("after modification",tokenizedReq);
 return next.handle(tokenizedReq);
  }

}
