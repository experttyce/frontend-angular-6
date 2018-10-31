import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../../models/users';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-header',
templateUrl: './header.component.html'})
export class HeaderComponent implements OnInit {
    
    currentUser: User;
    users: User[] = [];

    constructor(private authenticationService: AuthenticationService, private router: Router,private _route: ActivatedRoute) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
       
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
      
    }


  
}