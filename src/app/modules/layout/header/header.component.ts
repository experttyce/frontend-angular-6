import {Component, OnChanges, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

import {AuthenticationService} from '../../../common/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public _authService: AuthenticationService) { }

  ngOnInit() {

  }

  logout() {
  //  this._authService.logout();
    this.router.navigate(['/login']);
  }

}