import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './shared/layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'home',
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




