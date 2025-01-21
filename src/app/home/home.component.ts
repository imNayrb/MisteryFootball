import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductCarouselComponent } from "../product-carousel/product-carousel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCarouselComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

    navigateToSection(category: string) {
    this.router.navigate(['/prodotti'], { fragment: category + '-carousel' });
  }
}
