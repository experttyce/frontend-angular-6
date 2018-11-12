import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';




@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutRoutingModule
        
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    exports:[LayoutComponent, SidebarComponent, HeaderComponent],
    bootstrap: [ LayoutComponent ]
})
export class LayoutModule {}