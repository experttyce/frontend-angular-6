import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [


{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',canActivate: [AuthGuard]},
{ path: 'list', loadChildren: './user/list.module#ListModule',canActivate: [AuthGuard] },


            
            ]    
        }
    ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
  