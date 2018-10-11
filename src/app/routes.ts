
import { Routes } from '@angular/router';
// import { AuthGuard } from 'app/common/guards/auth.guard';
import { LogComponent } from './pages/log/log.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './common/error/error.component';
// import { PublicGuard } from './common/guards/public.guard';


export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LogComponent, pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent, data: { name: 'Home' }, 
  },
  
  {
    path: '**', component: ErrorComponent
  }
];