import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LayoutComponent } from './shared/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    VerificationComponent,
    MenuComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
