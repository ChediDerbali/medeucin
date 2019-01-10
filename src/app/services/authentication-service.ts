import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) {
  }


  login(email, password) {
    return this.http.post('/api/auth/signin', { email: email, password: password })
  }
}
