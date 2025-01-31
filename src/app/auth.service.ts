import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn()); 
  loggedIn$ = this.loggedIn.asObservable(); 

  constructor(private http: HttpClient) {}

  register(email: string, password: string, nome: string, cognome: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestBody = { email, password, nome, cognome };
    return this.http.post(`${this.apiUrl}/register`, requestBody, { headers });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
    this.loggedIn.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.loggedIn.next(false);
  }
}
