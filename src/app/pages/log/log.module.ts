import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { LogRoutingModule } from './log-routing.module';
import { RouterModule } from '@angular/router';
import { JasperoAlertsModule } from '@jaspero/ng-alerts';





@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    LogRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    JasperoAlertsModule.forRoot()
 
  ],
  declarations: [
    LogComponent
  ]
} )
export class LogModule {}