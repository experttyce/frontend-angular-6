import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication.service';

import { User } from '../../../models/users';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
     
  currentUser: User;
  

  constructor(private authenticationService: AuthenticationService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

    }


}
