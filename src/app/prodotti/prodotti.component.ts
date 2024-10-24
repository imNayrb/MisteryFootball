import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCarouselComponent } from '../product-carousel/product-carousel.component';
import { PopularProductsComponent } from '../popular-products/popular-products.component';
import { CommonModule } from '@angular/common';
import { CampionatiComponent } from '../campionati/campionati.component';

@Component({
  selector: 'app-prodotti',
  standalone: true,
  imports: [RouterOutlet, ProductCarouselComponent, PopularProductsComponent, CampionatiComponent, CommonModule],
  templateUrl: './prodotti.component.html',
  styleUrl: './prodotti.component.css'
})
export class ProdottiComponent {

  

}
