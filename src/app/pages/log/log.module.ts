import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log.component';
import { FormsModule } from '@angular/forms';

import { LogRoutingModule } from './log-routing.module';


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    LogRoutingModule
  ],
  declarations: [
    LogComponent
  ]
} )
export class LogModule {}