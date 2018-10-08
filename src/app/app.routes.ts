// importar modulos del router de angular
import {  ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar componentes
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogComponent } from './log/log.component';


const appROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error'
  }
];

// exportar el modulo del router
export const AppRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);



