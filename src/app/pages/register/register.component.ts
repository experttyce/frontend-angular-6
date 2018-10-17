'use strict';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { User } from '../../models/users';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../common/services/user.service';
import { RegisterValidators } from './register.validators';
import { GLOBAL } from '../../common/services/global';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;
  public status: string;
  
  form = this._formBuilder.group( {
    user: this._formBuilder.group( {
      name: [ '', Validators.required ],
      email: [ '', [ Validators.email, Validators.required ] ],
      username: [ '', Validators.required ],
      password: [ '', [ Validators.required, RegisterValidators.checkPassword ] ]
    } )
  } );

  constructor( 
     private _route: ActivatedRoute,
     private _router: Router,
     private _userService: UserService,
     private _formBuilder: FormBuilder

     ){
       this.user = new User('','','','');
 
      }

  ngOnInit() {
    console.log('register.component cargado !!');
   
 
  }

  onSubmit(){
    this._userService.register(this.user).subscribe(response => {
     console.log( response );
    },
    ( err ) => {
      console.error( err );
      }
    )
    
      }
/*
      onSubmit(){
        this._userService.register(this.user).subscribe(response => {
        if(response.user){
          this.status= 'success';
          this.user = new User('','','','');
          
        }else{
         
          this.status='error';
        }
          },
          error =>{
            console.log(<any>error);
          }
        );
        
          } */




  isRequired( fieldName: string ): boolean {
    return this.form.get( `user.${fieldName}` ).hasError( 'required' )
      && this.form.get( `user.${fieldName}` ).touched;
  }

  isInvalidPassword() {
    const field = 'user.password';
    return (
      this.form.get( field ).hasError( 'invalidPassword' ) &&
      // 
      this.form.get( field ).dirty &&
      // 
      ! this.isRequired( 'password' )
    );
  }
  isInvalidEmail() {
    const field = 'user.email';
    return (
      this.form.get( field ).hasError( 'email' )
    );
  }

}
