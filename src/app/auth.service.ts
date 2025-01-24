import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  login(user: { username: string; password: string }): boolean {
    if (user.username === 'test' && user.password === 'password') {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user')!);
  }
}
