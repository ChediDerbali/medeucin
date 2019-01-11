import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
  create(nom, prenom, email, password, type) {
    return this.http.post('/api/auth/signup', { nom: nom, prenom: prenom, email: email, password: password, type: type });
  }
}
