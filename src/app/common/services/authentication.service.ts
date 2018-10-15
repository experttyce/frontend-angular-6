import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 // import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post('https://reqres.in/api/login', {
      email: username,
      password: password,     
    });     
  }

//  public logout() {
  //  this.user = null;
    //this.hasSession = false;
    //this._locker.clear('user');
  //}

  
}