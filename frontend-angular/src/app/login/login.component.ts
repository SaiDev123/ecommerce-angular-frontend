import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apiResponse:any;
  constructor(private userService:UserService,private router:Router) { }


  ngOnInit(): void {
  }
  loginUser(){
    let user={
      emailId:"itsme.vikranth521@gmail.com",
      password:"changedpwd",
      role:'ROLE_CUSTOMER'
    }
    this.userService.loginAUser(user).subscribe(
      response => {
        console.log(response);
        this.apiResponse=response;
              
        if(this.apiResponse.token){
          localStorage.setItem('token',this.apiResponse.token);
          this.router.navigateByUrl('/userdashboard');
      }
    
  })
}
  
}
