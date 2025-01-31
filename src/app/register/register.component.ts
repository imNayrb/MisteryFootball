import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() toggleFormEvent = new EventEmitter<void>();
  nome = '';
  cognome = '';
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    console.log("Valori attuali:", { email: this.email, password: this.password });
  
    if (!this.email || !this.password) {
      this.message = "Email e password sono obbligatorie!";
      return;
    }
  
    this.authService.register(this.email, this.password, this.nome, this.cognome).subscribe({
      next: (response) => {
        this.message = response.message;
      },
      error: (error) => {
        this.message = 'Errore nella registrazione';
      }
    });
  }
  
  login() {
    this.router.navigate(['/login'])
  }
}
