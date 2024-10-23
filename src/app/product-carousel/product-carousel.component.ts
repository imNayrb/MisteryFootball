import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { Router, RouterModule } from '@angular/router';

registerLocaleData(localeIt);


@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {
  currentIndexPopular: number = 0;
  currentIndexOnSale: number = 0;
  itemsPerPage: number = 3;

  popularProducts: any[] = [];
  serieAProducts: any[] = [];
  nationalProducts: any[] = [];
  mlsProducts: any[] = [];
  bundesligaProducts: any[] = [];
  laligaProducts: any[] = [];
  premierProducts: any[] = [];
  ligue1Products: any[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    // Ottieni i prodotti per le diverse categorie
    this.popularProducts = this.productService.getProductsByCategory('popular');
    this.serieAProducts = this.productService.getProductsByCategory('serie A');
    this.nationalProducts = this.productService.getProductsByCategory('national');
    this.mlsProducts = this.productService.getProductsByCategory('mls');
    this.bundesligaProducts = this.productService.getProductsByCategory('bundes');
    this.laligaProducts = this.productService.getProductsByCategory('laliga');
    this.premierProducts = this.productService.getProductsByCategory('premier');
    this.ligue1Products = this.productService.getProductsByCategory('ligue1');
  }

  // Metodi per il carosello "Popular"
  nextSlidePopular() {
    if (this.currentIndexPopular + this.itemsPerPage < this.popularProducts.length) {
      this.currentIndexPopular += this.itemsPerPage;
    }
  }

  prevSlidePopular() {
    if (this.currentIndexPopular - this.itemsPerPage >= 0) {
      this.currentIndexPopular -= this.itemsPerPage;
    }
  }

  getTransformStylePopular(): string {
    return `translateX(-${(this.currentIndexPopular * (100 / this.itemsPerPage))}%)`;
  }

  // Metodi per il carosello "On Sale"
  nextSlideOnSale() {
    if (this.currentIndexOnSale + this.itemsPerPage < this.serieAProducts.length) {
      this.currentIndexOnSale += this.itemsPerPage;
    }
  }

  prevSlideOnSale() {
    if (this.currentIndexOnSale - this.itemsPerPage >= 0) {
      this.currentIndexOnSale -= this.itemsPerPage;
    }
  }

  getTransformStyleOnSale(): string {
    return `translateX(-${(this.currentIndexOnSale * (100 / this.itemsPerPage))}%)`;
  }

  navigateToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}


