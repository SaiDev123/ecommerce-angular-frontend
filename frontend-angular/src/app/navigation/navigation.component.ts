import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // isUserLoggedIn:boolean;

  // constructor(userService:UserService) {
  //   this.isUserLoggedIn=userService.isLoggedIn();
  //   console.log('is user logged in',this.isUserLoggedIn);
  //  }
  constructor(public userService:UserService) {
   
   }



  ngOnInit(): void {
  }

}
