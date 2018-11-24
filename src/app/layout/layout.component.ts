



import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  isCollapsed = false;
  //anio: number = new Date().getFullYear();
  test: Date = new Date();
  
    
    

    constructor() {}

    ngOnInit() {
      
      }
    }