import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {


  getHTTPHeaderWithAuth() {
    console.log(JSON.parse( localStorage.getItem('currentUser')).accessToken)
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse( localStorage.getItem('currentUser')).accessToken
      })
    };
  }
  constructor() { }
}
