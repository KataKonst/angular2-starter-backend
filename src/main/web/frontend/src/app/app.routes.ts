import { Routes, RouterModule } from '@angular/router';


import { DataResolver } from './app.resolver';
import {App} from "./app.component";
import {NoContent} from "./no-content/no-content";
import {RegisterComponent} from "./components/user/RegisterComponent"



export const ROUTES: Routes = [
  { path: '',      component: App },
{ path: 'register',      component: RegisterComponent },

];
