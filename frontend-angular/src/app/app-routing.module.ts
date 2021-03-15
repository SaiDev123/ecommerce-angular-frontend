import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CareersComponent } from './careers/careers.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

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
  },
  {
    path:'userdashboard',
    component:UserdashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'logout',
    component:LogoutComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'changepwd',
    component:ChangepasswordComponent,
    canActivate:[AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
