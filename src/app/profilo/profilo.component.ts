import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../llogin/llogin.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [LoginComponent, ProfileComponent, CommonModule],
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