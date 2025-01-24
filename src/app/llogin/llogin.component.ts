// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './llogin.component.html',
  styleUrls: ['./llogin.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    if (this.authService.login({ username: this.username, password: this.password })) {
      window.location.reload();
    } else {
      alert('Login failed');
    }
  }
}
