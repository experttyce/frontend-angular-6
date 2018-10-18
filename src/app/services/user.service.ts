import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${environment.baseUrl}/api/register`, user);
  }

  verify(verification_code) {
    return this.http.post(`${environment.baseUrl}/api/user/verify/${verification_code}`,{});
  }


}
