import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {


  getHTTPHeaderWithAuth() {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      })
    };
  }
  constructor() { }
}
