import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;
  private baseUrl: string = environment.baseUrl;
  
  get auth(): Auth{
    return {...this._auth!}
  }

  constructor(private http: HttpClient) { }

  verificarAutenticacion() : Observable<boolean>{
    if (!localStorage.getItem('token'))
      return of(false);//transforma el false en observable
    

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
              map(auth => {
                this._auth = auth;
                return (true);
              })
            );
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                .pipe(
                  tap(resp => this._auth = resp),
                  tap(resp => localStorage.setItem('token', resp.id)),
                );
  }

  logout(){
    this._auth = undefined;
  }
}
