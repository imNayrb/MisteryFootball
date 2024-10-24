import { Component } from '@angular/core';
import { RouterOutlet, Route } from '@angular/router';
import { ProductCarouselComponent } from "../product-carousel/product-carousel.component";
import { PopularProductsComponent } from "../popular-products/popular-products.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductCarouselComponent, PopularProductsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
