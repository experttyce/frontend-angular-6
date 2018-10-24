import {Component, OnChanges, OnInit, DoCheck} from '@angular/core';
import {  Router } from '@angular/router';

import { AuthenticationService } from '../../../common/services/authentication.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  public identity;

  anio: number = new Date().getFullYear();

  constructor(public router: Router,
    private authenticationService: AuthenticationService
    
    ) {
     
     }

  ngOnInit() {
  this.identity = this.authenticationService;
  
  }
  public logout(){
    this.authenticationService.logout();
    
  }  

  ngDoCheck(){

  }

}