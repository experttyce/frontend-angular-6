import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

import { User } from '../../models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
     
  currentUser: User;
  

  constructor(private authenticationService: AuthenticationService,
    private _route: ActivatedRoute,
    private _router: Router
  ) 
  
  { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

    }


}
