import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.css'
})
export class ProfiloComponent implements OnInit{
  
  isLoginForm: boolean = true;
  user: any;

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe(
      (userData) => {
        this.user = userData; 
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAllUsers() {
    this.authService.getAllUsers().subscribe((data: any) => {
      this.user = data;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}