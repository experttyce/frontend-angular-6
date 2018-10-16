import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './common/error/error.component';
import { HeaderComponent } from './modules/layout/header/header.component';



export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  
  {
    path: 'login', loadChildren: './pages/log/log.module#LogModule',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: './pages/home/home.module#HomeModule'

  },
  {
    path: 'register', loadChildren: './pages/register/register.module#RegisterModule'
  },
 
  { path: 'header',  component: HeaderComponent},


  {
    path: '**', component: ErrorComponent
  }
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forRoot( routes ),
  ],
  exports:[
    RouterModule
  ]

} )
export class AppRoutingModule {}