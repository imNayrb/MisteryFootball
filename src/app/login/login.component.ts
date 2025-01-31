import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() toggleFormEvent = new EventEmitter<void>();
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log("Login riuscito:", response);
        this.message = "Accesso effettuato con successo!";

        const token = response.token;
        this.authService.saveToken(token);

        this.router.navigate(['/profilo']);
      },
      error: (error) => {
        console.error("Errore durante il login:", error);
        this.message = "Errore nel login. Controlla le credenziali.";
      }
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

}
