import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './shared/layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './guards/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard] ,
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'home',
        canActivate: [AuthGuard] ,
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      },
      {
        path: 'error',
        loadChildren: './error/error.module#ErrorModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'error/404'
  }
];




