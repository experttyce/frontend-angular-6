'use strict';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { User } from '../../models/users';
import { FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { RegisterValidators } from './register.validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
   
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  public user: User;
  public usuario_guardado;
  userForm: any;
  
      form = this._formBuilder.group( {
      user: this._formBuilder.group( {
      name: [ '', Validators.required ],
      email: [ '', [ Validators.email, Validators.required ] ],
      password: [ '', [ Validators.required, RegisterValidators.checkPassword,Validators.minLength(6) ] ]
    } )
  } );

  constructor(

     private _route: ActivatedRoute,
     private _router: Router,
     private _userService: UserService,
     private _formBuilder: FormBuilder
    ){   
        
      }
  
  ngOnInit() {
    console.log('register.component cargado !!');
    
  }
  onSubmit(){
    const user = this.form.value.user;
  
    this._userService.register(user).subscribe( (response) => {
        this.usuario_guardado = response;
        //form.reset();
        
      },
     error => {
      console.error( <any> error );
      }
    ); 
  }   

  isRequired( fieldName: string ): boolean {
    return this.form.get( `user.${fieldName}` ).hasError( 'required' )
      && this.form.get( `user.${fieldName}` ).touched;
  }

  isInvalidPassword() {
    const field = 'user.password';
    return (
      this.form.get( field ).hasError( 'invalidPassword' ) &&
      // The user has actually interacted with the field
      this.form.get( field ).dirty &&
      // The user has actually typed
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
