import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { VerifyuserComponent } from './verifyuser/verifyuser.component';
import { UserService } from '../services/user.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule
  ],
  declarations: [VerifyuserComponent],
  providers: [UserService]
})
export class PublicModule { }
