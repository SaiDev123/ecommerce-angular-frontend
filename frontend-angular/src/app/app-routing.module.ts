import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'careers',
    component:CareersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 


exports: [RouterModule]
})
export class AppRoutingModule { }
