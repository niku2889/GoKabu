import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.cmp';
import { RegisterComponent } from './common/register/register.cmp';
import { LoginComponent } from './common/login/login.cmp';
const userRole = localStorage.getItem('usertype');

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
