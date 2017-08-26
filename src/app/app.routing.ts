import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
const appRouts: Routes=[
    {
        path:'',
        component: AppComponent 
    },
     {
        path:'login',
        component: LoginComponent 
    },
    {
        path:'register',
        component:  RegisterComponent
    }
]

export const routing: ModuleWithProviders= RouterModule.forRoot(appRouts);


