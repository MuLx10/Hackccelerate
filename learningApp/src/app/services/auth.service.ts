import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {Subject, EMPTY, BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorage} from './token.storage';
import {pluck, tap} from 'rxjs/operators';

interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({ providedIn: 'root'})
export class AuthService {

  private isAuthenticated = false;
  private user$ = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorage){}

  checkUserOnFirstLoad(): Promise<User> {
    return this.getLoggedInUser().toPromise();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUser() {
    return this.user$.asObservable();
  }

  createUser(user) {
    const authData: User = { _id: '', name: user.name, email: user.email, password: user.password, role: user.role};
    this.http.post('http://localhost:3000/api/user/signup', authData)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/auth/login']);
      });
  }

  login(email: string, password: string) {
    const authData = { email, password};
    this.http.post<AuthResponse>('http://localhost:3000/api/user/login', authData)
      .subscribe(response => {
        const token = response.token;
        if (token) {
          this.isAuthenticated = true;
          this.tokenStorage.set(token);
          this.user$.next(response.user);
          this.router.navigate(['/']);
        }
        console.log(response);
      });
  }

  logout() {
    this.tokenStorage.clear();
    this.isAuthenticated = false;
    this.user$.next(null);
    this.router.navigate(['/']);
  }

  getLoggedInUser(){
    const token = this.tokenStorage.get();
    if (token === null){
      return EMPTY;
    }

    return this.http.get<AuthResponse>('http://localhost:3000/api/user/loggedIn').pipe(
      tap(({ user }) => {
        this.isAuthenticated = true;
        this.user$.next(user);
      }),
      pluck('user'));
  }

  getAuthHeader() {
    const token = this.tokenStorage.get();
    return { Authorization: `Bearer ${token}` };
  }

}
