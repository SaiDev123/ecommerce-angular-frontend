import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { TokenInterceptorService } from './tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CareersComponent,
    ContactusComponent,
    NavigationComponent,
    HomeComponent,
    UserdashboardComponent,
    LogoutComponent,
    ChangepasswordComponent
  ],
  imports: [
 
BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true,
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
