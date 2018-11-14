import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-datail/user-detail.component';



const routes: Routes = [
    {path: '', component: ListComponent},
    {path: 'list', component: ListComponent},
    {path: 'misdatos', component: UserEditComponent},
    {path: 'detail', component: UserDetailComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule {
}
