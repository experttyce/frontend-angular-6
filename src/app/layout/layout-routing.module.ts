import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [


   //  { path: '', loadChildren:  './authentication/authentication.module#AuthenticationModule'},


    {
        path: 'layout',
        component: LayoutComponent, canActivate: [AuthGuard] ,
        children: [

{path: '', component: HomeComponent},
{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',canActivate: [AuthGuard]},
{ path: 'user', loadChildren: './user/list.module#ListModule',canActivate: [AuthGuard] }
            
            ]    
        }
    ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}