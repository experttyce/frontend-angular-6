import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found.component';



const routes: Routes = [
{ path: '', loadChildren:  './authentication/authentication.module#AuthenticationModule'},
{path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule'},
{ path: 'layout', loadChildren: './layout/layout.module#LayoutModule',canActivate: [AuthGuard] },
{path: '**', component: PageNotFoundComponent}
  ];
  
  @NgModule( {
    imports: [
      CommonModule,
      RouterModule.forRoot( routes ),
    ],
    declarations: []
  } )
  export class AppRoutingModule {}
  
