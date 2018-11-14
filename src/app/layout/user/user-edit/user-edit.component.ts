import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { User } from '../../../models/users';
import { GLOBAL } from '../../../shared/services/global';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services';


@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  providers: [AuthenticationService]
})
export class UserEditComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
public title: string; 
public user: User;
public identity;
public token;

  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private _authenticationServive: AuthenticationService

  ) { 

    this.title= 'Actualizar mis Datos';
    this.identity = this._authenticationServive.getIdentity();
    this.token = this._authenticationServive.getToken(),
    this.user = this.identity;
}
ngOnInit(){
  console.log( ' user-edit.component.ts cargado!');
  this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
});
}

get f() { return this.registerForm.controls; }

onSubmit(){

 
}   
}
