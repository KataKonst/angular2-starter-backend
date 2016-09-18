import { Routes, RouterModule } from '@angular/router';


import { DataResolver } from './app.resolver';
import {App} from "./app.component";
import {NoContent} from "./no-content/no-content";
import {RegisterComponent} from "./components/user/RegisterComponent";
import {LoginComponent} from "./components/user/LoginComponent"
import {IndexComponent} from "./components/user/IndexComponent"
import {WelcomeUserComponent} from "./components/user/WelcomeUserComponent"






export const ROUTES: Routes = [
  { path: '',      component: IndexComponent },
{ path: 'register',      component: RegisterComponent },
{ path: 'welcomeuser',      component: WelcomeUserComponent },
{ path: 'login',      component: LoginComponent },
{ path: 'index',      component: IndexComponent },



];
