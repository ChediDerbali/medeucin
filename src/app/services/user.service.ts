import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  create(nom, prenom, email, password, type) {
    return this.http.post('/api/auth/signup', { nom: nom, prenom: prenom, email: email, password: password, type: type });
  }
}
