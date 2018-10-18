import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VerifyuserComponent} from './verifyuser/verifyuser.component';

const routes: Routes = [
  {
    path: 'verifyuser/:verificationcode',
    component: VerifyuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
