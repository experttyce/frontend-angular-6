import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { User } from '../../../models/users';


import { UserService } from '../../../shared/services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  providers:[UserService]
})
export class UserDetailComponent implements OnInit {
  public title: string; 
   currentUser: User;
  public status;
  public user:User;


  

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.title= 'UPDATE DATA';

   }

  ngOnInit() {

    console.log('user-detail.component.ts cargado correctamente!!')
  }

  onSubmit(){
    

    this.userService.updateUser(this.user).subscribe(
    reponse => {
  
    },
error => {
var errorMessage= <any>error;
if(errorMessage!= null){
  this.status = 'error';
}
}

  );
  }

}
