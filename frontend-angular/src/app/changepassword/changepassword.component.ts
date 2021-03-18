import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  
  }

   changePassword(){
  
     let details= {
         emailId: 'itsme.vikranth521@gmail.com',
         currentPassword: 'changedpwd',
         newPassword: 'somepassword'
     }

     this.userService.changePassword(details).subscribe(
         response => {
           console.log(response);
         } ,
         error =>{
           console.log(error);
         }
     )
   }


   

}
