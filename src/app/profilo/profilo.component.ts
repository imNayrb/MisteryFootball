import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.css'
})
export class ProfiloComponent implements OnInit{
  
  isLoginForm: boolean = true;
  user: any;
  activeContent: string = 'default';

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}
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

  setActiveContent(content: string): void {
    this.activeContent = content;
  }

  updateUser() {
    this.userService.updateUser(this.user.id, this.user).subscribe(
      response => {
        console.log('Utente aggiornato con successo!', response);
      },
      error => {
        console.error('Errore nell’aggiornamento dell’utente', error);
      }
    );
  }
}