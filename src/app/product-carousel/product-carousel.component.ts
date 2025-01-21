import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../products.service';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

registerLocaleData(localeIt);

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit() {
    // Intercetta il cambiamento del frammento e fai scroll sulla sezione
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.router.url.split('#')[1];
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          // Utilizza il setTimeout per assicurarti che l'elemento sia pronto
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 200); // Attendi un attimo per permettere la visualizzazione dell'elemento
        }
      }
    });
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

  // Metodo per navigare ai frammenti delle sezioni specifiche
  navigateToSection(category: string) {
    this.router.navigate([], { fragment: category + '-carousel' });
  }
}
