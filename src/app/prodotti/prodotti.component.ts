import { Component } from '@angular/core';
import { ProductCarouselComponent } from '../product-carousel/product-carousel.component';
import { CommonModule } from '@angular/common';
import { CampionatiComponent } from '../campionati/campionati.component';

@Component({
  selector: 'app-prodotti',
  standalone: true,
  imports: [ProductCarouselComponent, CampionatiComponent, CommonModule],
  templateUrl: './prodotti.component.html',
  styleUrl: './prodotti.component.css'
})

export class ProdottiComponent { }
