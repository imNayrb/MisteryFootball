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
      this.productService.getProductsByCategory('serie A').subscribe((products) => {
        this.serieAProducts = products;
      });
      this.productService.getProductsByCategory('mls').subscribe((products) => {
        this.mlsProducts = products;
      });
      this.productService.getProductsByCategory('bundes').subscribe((products) => {
        this.bundesligaProducts = products;
      });
      this.productService.getProductsByCategory('laliga').subscribe((products) => {
        this.laligaProducts = products;
      });
      this.productService.getProductsByCategory('premier').subscribe((products) => {
        this.premierProducts = products;
      });
      this.productService.getProductsByCategory('ligue1').subscribe((products) => {
        this.ligue1Products = products;
      });
      this.productService.getProductsByCategory('popular').subscribe((products) => {
        this.popularProducts = products;
      });
      this.productService.getProductsByCategory('national').subscribe((products) => {
        this.nationalProducts = products;
      });
    }

  ngAfterViewInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.router.url.split('#')[1];
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }
      }
    });
  }

  nextSlidePopular() {
    if (this.currentIndexPopular + 1 < this.popularProducts.length) {
      this.currentIndexPopular += 1;
    }
  }
  
  prevSlidePopular() {
    if (this.currentIndexPopular - 1 >= 0) {
      this.currentIndexPopular -= 1;
    }
  }
  
  getTransformStylePopular(): string {
    const itemWidth = 100 / this.itemsPerPage; 
    return `translateX(-${this.currentIndexPopular * itemWidth}%)`;
  }
  
  
  nextSlideOnSale() {
    if (this.currentIndexOnSale + 1 < this.serieAProducts.length) {
      this.currentIndexOnSale += 1;
    }
  }
  
  prevSlideOnSale() {
    if (this.currentIndexOnSale - 1 >= 0) {
      this.currentIndexOnSale -= 1;
    }
  }
  
  getTransformStyleOnSale(): string {
    return `translateX(-${this.currentIndexOnSale * 100}%)`;
  }
  

  navigateToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  navigateToSection(category: string) {
    this.router.navigate([], { fragment: category + '-carousel' });
  }
}
