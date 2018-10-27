import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

    
  anio: number = new Date().getFullYear();
    
    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    
}
