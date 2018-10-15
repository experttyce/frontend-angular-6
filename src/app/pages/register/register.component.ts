import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { User } from '../../models/users';
import { GLOBAL } from '../../common/services/global';
import { UserService } from '../../common/services/user.service';
import { error } from 'util';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;
  public status: string;

  constructor( 
     private _route: ActivatedRoute,
     private _router: Router,
     private _userService: UserService
     ){
       this.user = new User('','','','','ROLE_USER');
 
      }

  ngOnInit() {
    console.log('register.component cargado !!');
 
  }

  onSubmit(){
   this._userService.register (this.user).subscribe(
     response =>{
       if(response.user._id){
        this.status= 'success';
       }else{
       
        this.status= 'error';
       }
       this.user = new User('','','','','ROLE_USER');
    },
    error=>{
      console.log(<any>error);
    }
   );
  }

}
