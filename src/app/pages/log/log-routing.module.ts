import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log.component';

const routes: Routes = [
  { path: '', component: LogComponent }
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  declarations: []
} )
export class LogRoutingModule {}