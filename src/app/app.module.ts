import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RecaptchaModule } from 'ng-recaptcha';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import {ServiceAuthService}from './service-auth.service'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,RecaptchaModule
  ],
  providers: [AuthGuard,ServiceAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
