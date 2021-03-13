import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../must-validator';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

apiResponse:any;

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) { }

  submitted = false;
  registerForm:any;

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          emailId: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      else
      {
         this.userService.registerUser(this.registerForm.value).subscribe(
           response => {
             console.log(response);
               
              this.apiResponse=response;
              
              if(this.apiResponse.token){
                localStorage.setItem('token',this.apiResponse.token);
                this.router.navigateByUrl('/userdashboard');

              }
              else
              {
                alert("user not registered!");
              }
        
           },
           error => {
             console.log(error);
           }
         )
      }
  }
}


