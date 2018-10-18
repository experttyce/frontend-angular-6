import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../app.helpers';
declare var jQuery: any;

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html'
})
export class TopnavbarComponent implements OnInit {
  isAuthenticate: boolean;
  constructor() { }

  ngOnInit() {
    this.isAuthenticate = !!localStorage.getItem('currentUser');
  }

  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

}
