import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.baseUrl}/api/login`, {
        email: username,
        password: password
      })
      .pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user.data.user && user.data.token) {
            // store verifyuser details and jwt token in local storage to keep verifyuser logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user.data));
          }

          return user;
        }));
  }

  logout() {
    // remove verifyuser from local storage to log verifyuser out
    localStorage.removeItem('currentUser');
  }
}
