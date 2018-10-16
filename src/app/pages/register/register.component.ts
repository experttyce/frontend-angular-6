import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { User } from '../../models/users';
import { GLOBAL } from '../../common/services/global';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../common/services/user.service';
import { RegisterValidators } from './register.validators';




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
     private _formBuilder: FormBuilder,

     ){
       this.user = new User('','','','');
 
      }

  ngOnInit() {
    console.log('register.component cargado !!');
   
 
  }

  onSubmit(registerForm){
    this._userService.register (this.user).subscribe(
     response =>{
       if(response.user && response.user._id){
        this.status= 'success';
        this.user = new User('','','','');
        registerForm.reset();
       }else{
        this.status= 'error';
       }
     
    },

    error=>{
      console.log(<any>error);
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
