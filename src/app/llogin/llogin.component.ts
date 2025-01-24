import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../environments/environments';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './llogin.component.html',
  styleUrls: ['./llogin.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  login() {
    const apiUrl = `${environment.apiUrl}/login`;  // Usa l'apiUrl da environment
    this.http.post<any>(apiUrl, { username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          // Gestisci la risposta: salva il token nel localStorage
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('username', response.username);

          // Naviga alla pagina del profilo
          this.router.navigate(['/profile']);
        },
        error: (error) => {
          // Gestisci l'errore
          console.error('Login failed:', error);
          alert('Login failed!');
        }
      });
  }
}