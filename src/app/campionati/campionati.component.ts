import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-campionati',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campionati.component.html',
  styleUrl: './campionati.component.css'
})
export class CampionatiComponent {

  /* Current Index */

  currentIndexPopular: number = 0
  currentIndexSerieA: number = 0;
  currentIndexPremier: number = 0;
  currentIndexLaLiga: number = 0
  itemsPerPage: number = 3;

  /* Categorie */

  mlsProducts: any[] = [];
  bundesligaProducts: any[] = [];
  laligaProducts: any[] = [];
  premierProducts: any[] = [];
  ligue1Products: any[] = [];
  serieAProducts: any[] = []

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    // Ottieni i prodotti per le diverse categorie
    this.serieAProducts = this.productService.getProductsByCategory('serie A');
    this.mlsProducts = this.productService.getProductsByCategory('mls');
    this.bundesligaProducts = this.productService.getProductsByCategory('bundes');
    this.laligaProducts = this.productService.getProductsByCategory('laliga');
    this.premierProducts = this.productService.getProductsByCategory('premier');
    this.ligue1Products = this.productService.getProductsByCategory('ligue1');
  }

  /* Aprire Dettagli Prodotto */

  navigateToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  /* Movimenti Caroselli */

  /* Serie A */

  nextSlideSerieA() {
    if (this.currentIndexSerieA + this.itemsPerPage < this.serieAProducts.length) {
      this.currentIndexSerieA += this.itemsPerPage;
    }
  }

  prevSlideSerieA() {
    if (this.currentIndexSerieA - this.itemsPerPage >= 0) {
      this.currentIndexSerieA -= this.itemsPerPage;
    }
  }

  getTransformStyleSerieA(): string {
    return `translateX(-${(this.currentIndexSerieA * (100 / this.itemsPerPage))}%)`;
  }

  /* Premier League */

  nextSlidePremier() {
    if (this.currentIndexPremier + this.itemsPerPage < this.premierProducts.length) {
      this.currentIndexPremier += this.itemsPerPage;
    }
  }

  prevSlidePremier() {
    if (this.currentIndexPremier - this.itemsPerPage >= 0) {
      this.currentIndexPremier -= this.itemsPerPage;
    }
  }

  getTransformStylePremier(): string {
    return `translateX(-${(this.currentIndexPremier * (100 / this.itemsPerPage))}%)`;
  }

  /* La Liga */

  nextSlideLaLiga() {
    if (this.currentIndexLaLiga + this.itemsPerPage < this.laligaProducts.length) {
      this.currentIndexLaLiga += this.itemsPerPage;
    }
  }

  prevSlideLaLiga() {
    if (this.currentIndexLaLiga - this.itemsPerPage >= 0) {
      this.currentIndexLaLiga -= this.itemsPerPage;
    }
  }

  getTransformStyleLaLiga(): string {
    return `translateX(-${(this.currentIndexLaLiga * (100 / this.itemsPerPage))}%)`;
  }

}
