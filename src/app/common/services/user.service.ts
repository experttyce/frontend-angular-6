import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

import { Params } from '@angular/router';

@Injectable()
export class UserService {
    public url: string;


  constructor(private _http: Http) {
    this.url=  GLOBAL.url;
      
  }
 
  //metodos para registrar nuevo usuario
  register(user_to_register){
    let params= JSON.stringify(user_to_register);
    let headers=  new Headers({'Content-Type':'aplication/json'});

    return  this._http.post(this.url+'register', params, {headers:headers})
    .map(res => res.json());
   
  }
}

  