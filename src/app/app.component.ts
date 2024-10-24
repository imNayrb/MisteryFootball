import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuOpen = false; // Variabile che gestisce lo stato del menu

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Cambia lo stato del menu (aperto/chiuso)
  }
}

