import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router';

import { ErrorComponent } from './common/error/error.component';



export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login',
    loadChildren: './pages/log/log.module#LogModule',
    pathMatch: 'full',
 },

{
  path: ' ',
  loadChildren: './pages/home/home.module#HomeModule'
    
},
{
  path: 'register', 
  loadChildren: './pages/register/home.module#HomeModule'  
},
 
  {
    path: '* *', component: ErrorComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }