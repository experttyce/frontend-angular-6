import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {
    public url: string;
    public identity;
    public token;

  constructor(
    public http: HttpClient
    ) {
    this.url=  GLOBAL.url; 
      
  }
 


  register(user_to_register):Observable<any> {

    let params= JSON.stringify(user_to_register);
    let headers= new HttpHeaders({'Content-Type':'aplication/json'});

    return  this.http.post(this.url+'register', params, {headers:headers})
    .map(res => res );
   }
   
  
   
  signup(user_to_login, gettoken= null){
      if(gettoken !=null){
        user_to_login.gettoken=gettoken;
      }

  let params= JSON.stringify(user_to_login);
  let headers = new HttpHeaders({'Content-Type':'aplication/json'});

  return  this.http.post(this.url+'login', params, {headers:headers})
  .map(res => res );
}
getIdentity (){
  let identity = JSON.parse(localStorage.getItem('identity'));
  if (identity!= "undefined"){
    this.identity=identity;

  }else{
    this.identity= null;
  }
  return this.identity;
}


getToken (){

let token = localStorage.getItem('token');
if(token!= "undefined"){
  this.token=token;
}else{
  this.token=null;
}
return this.token;
}

}


  