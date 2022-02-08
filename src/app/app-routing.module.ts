import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'verification',
    component: VerificationComponent,
  },
  {
    path: 'l',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component:HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
