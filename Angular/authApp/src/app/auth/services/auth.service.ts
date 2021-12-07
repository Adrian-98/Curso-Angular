import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    const name = 'adrian';
    const url = `${this.baseUrl}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    const body = {name, email, password}
    return this.http.post<AuthResponse>(url, body, httpOptions);
  }
}
