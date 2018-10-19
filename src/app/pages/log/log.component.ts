import {Component, OnInit} from '@angular/core';
import {  Router, ActivatedRoute,Params } from '@angular/router';
import { UserService } from '../../common/services/user.service';
import { User } from '../../models/users';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  providers: [UserService]
})
export class LogComponent implements OnInit {
  public user: User;
  public identity;
  public token;
  public status: string;


  constructor(
  //  private AuthenticationService: AuthenticationService,
    private _route: ActivatedRoute,
     private _router: Router,
     private _userService : UserService
   ){
    //this.user = new User('','','','');
    }

  ngOnInit() {
    console.log('log.component cargado!!');


  }

  /*
  onSubmit(){

    //loguear al usuario y conseguir sus datos 
       this._userService.signup(this.user).subscribe(
        response => {
        this.identity = response;
        if(!this.identity || !this.identity._id){ 
          alert('El usuario no se ha logueado correctamente');
        }else{
          //mostrar Identity (el objeto del usuario)
          this.identity.password='';
        localStorage.setItem('identity', this.identity);
     
//conseguir el token

this._userService.signup(this.user,'true').subscribe(
  response => {
    this.token = response;
    if(this.token.length <=0){
      alert('El token no se ha generado');
    }else{
      localStorage.setItem('token',JSON.stringify(this.token));
      this.status = 'sucess';
    }

  },
  error =>{
    console.log(<any>error);
  }
);
  }
},
error => {
var errorMessage= <any>error;
if(errorMessage != null){
  var body = JSON.parse(error._body);
  this.status= 'error';

}

}
    );
}

*/


}