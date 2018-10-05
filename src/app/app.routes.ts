// importar modulos del router de angular
import {  ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// importar componentes
import { LoginComponent } from './login/login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

// Array  de rutas - configuracion

const appROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: '* *',  pathMatch: 'full', redirectTo: 'error' }
];



// exportar el modulo del router
export const AppRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appROUTES);

