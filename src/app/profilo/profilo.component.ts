import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../llogin/llogin.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [LoginComponent, ProfileComponent],
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.css'
})
export class ProfiloComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}