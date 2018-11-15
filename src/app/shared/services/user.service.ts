import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../../models';
import { RequestOptions, Headers } from '@angular/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    public url: string;
 

  constructor( private http: HttpClient,
    private authenticationService: AuthenticationService
    ) {
    this.url=  GLOBAL.url; 
      
  }
 
//pèticion ajax con el metodo POST

  register(user_to_register):Observable<any> {

    let params= JSON.stringify(user_to_register);
    let headers= new HttpHeaders().set('Content-Type','aplication/json');
    return this.http.post(this.url+'register', params, {headers:headers})

   }


  verifyEmail(verify_code){
    let params= JSON.stringify(verify_code);
    let headers= new HttpHeaders().set('Content-Type','aplication/json');
    return this.http.post(this.url+'user/verify', params, {headers:headers})
}



getUserList(){
  let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
  return this.http.get<User[]>(this.url+'users', { headers: reqHeader });
}  



updateUser(user_to_update){
  let params= JSON.stringify(user_to_update);
  let reqHeader = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
 });

 return this.http.put(this.url+'update'+user_to_update._id, params, {headers:reqHeader})

}
}