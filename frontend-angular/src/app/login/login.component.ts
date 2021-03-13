import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  loginUser(){
    let user={
      emailId:"smartwatch@gmail.com",
      password:"smartwatch",
      role:'ROLE_CUSTOMER'
    }
    this.userService.loginAUser(user).subscribe(
      response => {
        console.log(response);
      }
    )

  }

}
