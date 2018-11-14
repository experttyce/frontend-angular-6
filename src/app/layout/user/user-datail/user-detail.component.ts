import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { User } from '../../../models/users';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public title: string; 
  currentUser: User;

  

  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.title= 'UPDATE DATA';
   }

  ngOnInit() {
  }

}
