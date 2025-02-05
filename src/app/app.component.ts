import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from './products.service';
import { AuthService } from './auth.service';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cart: any[] = [];
  menuOpen = false;
  cartOpen: boolean = false;
  cartItems: CartItem[] = [];
  isLoggedIn: boolean = false;

  constructor(private productService: ProductService, private AuthService: AuthService) {}

  ngOnInit(): void {
    this.AuthService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen; 
  }

  toggleCart(): void {
    this.cartOpen = !this.cartOpen;
  }

  addToCart(product: CartItem): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      this.cartItems.push(product);
    }
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getCartItems() {
    return this.productService.getCart();
  }
}


