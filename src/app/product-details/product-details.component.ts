import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../products.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined; 
  selectedSize: string = ''; 
  quantity: number = 1; 
  displayedImage: string = ''; 
  sizes: string[] = ['S', 'M', 'L', 'XL']; 
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService 
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;

      if (this.product && this.product.image) {
        this.displayedImage = this.product.image;
      } else {
        this.displayedImage = '/assets/fallback-image.jpg';
      }
    });
  
    this.selectedSize = localStorage.getItem('selectedSize') || '';
    this.quantity = Number(localStorage.getItem('selectedQuantity')) || 1;

    this.isLoggedIn = !!localStorage.getItem('jwt')
  }
  

  selectSize(size: string): void {
    this.selectedSize = size;
    localStorage.setItem('selectedSize', size);
  }

  selectQuantity(qty: number): void {
    this.quantity = qty;
    localStorage.setItem('selectedQuantity', qty.toString());
  }

  changeImage(newImage: string | undefined): void {
    if (newImage) {
      this.displayedImage = newImage;
    } else {
      this.displayedImage = '/assets/fallback-image.jpg';
    }
  }

  addToCart(): void {
    if (this.authService.isAuthenticated()) {
      if (this.product && this.selectedSize && this.quantity > 0) {
        this.productService.addToCart(this.product, this.quantity, this.selectedSize);
        alert('Prodotto aggiunto al carrello!');
      } else {
        alert('Seleziona una taglia e una quantità valida!');
      }
    } else {
      alert('Per aggiungere un prodotto al carrello, devi prima effettuare il login!');
    }
  }  
}
