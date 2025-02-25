import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'forgot-password', component: ForgotPasswordPage },
  { path: 'sign-up', component: SignUpPage },
  { path: 'home', component: HomePage },
];