import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { HttpClient } from '@angular/common/http';
import { HttpUtilsService } from './http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private httpUtils: HttpUtilsService) {
  }

  getAll() {
    return this.http.get<User[]>('/api/users', this.httpUtils.getHTTPHeaderWithAuth());
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.httpUtils.getHTTPHeaderWithAuth());
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id,this.httpUtils.getHTTPHeaderWithAuth());
  }
  create(nom, prenom, email, password, type) {
    return this.http.post('/api/auth/signup', { nom: nom, prenom: prenom, email: email, password: password, type: type });
  }
}
