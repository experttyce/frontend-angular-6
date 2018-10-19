'use strict';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { User } from '../../models/users';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../common/services/user.service';
import { ValidationService } from '../../common/services/validation.service';


import {  Input } from '@angular/core';
import {  FormControl } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
   
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  @Input() control: FormControl;
  public user: User;
  public usuario_guardado;
  userForm: any;


  constructor(

     private _route: ActivatedRoute,
     private _router: Router,
     private _userService: UserService,
     private formBuilder: FormBuilder
    ){
       

      this.userForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.pattern(/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=.*[!@#$%^&*]{1})\S{6,}$/)]],
      });

    
       this.user = new User('','','','');
      
        
      }

  ngOnInit() {
    console.log('register.component cargado !!');
   
 
  }


  
  onSubmit(form){
    
    this._userService.register(this.user).subscribe( 
      response => {
        this.usuario_guardado = response;
        form.reset();
        console.log(response);
      },
     error => {
      console.error( <any> error );
      }
    ); 
  } 

  



}
