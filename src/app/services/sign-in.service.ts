import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  getAuth(email: string, psw: string) {
    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('psw', psw);
    return this.http.get('http://127.0.0.1:5000/signIn', { params });
  }
}
