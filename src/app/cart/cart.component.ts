import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../product';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeIT from '@angular/common/locales/it';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: { product: Product, quantity: number, size: string }[] = [];
  totalAmount: number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.getCart();
    this.calculateTotal()
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((total, item) => total + this.getTotalPrice(item), 0);
  }

  getTotalPrice(item: { product: Product, quantity: number, size: string }): number {
    return item.product.price * item.quantity;
  } 

  updateQuantity(item: {
    size: string; product: Product, quantity: number }, quantity: number): void {
      if (quantity < 1) {
        this.removeFromCart(item);
      } else {
        const cartItemIndex = this.cartItems.findIndex(cartItem => cartItem === item);
        if (cartItemIndex !== -1) {
          this.cartItems[cartItemIndex].quantity = quantity;
        }
        this.calculateTotal();
      }
    }

  onQuantityChange(event: Event, index: number): void {
    const inputElement = event.target as HTMLInputElement | null;
    
    if (inputElement && inputElement.value) {
      const newQuantity = parseInt(inputElement.value, 10);
      if (newQuantity > 0) {
        this.cartItems[index].quantity = newQuantity;
        this.calculateTotal();
      }
    }
  }
  

  removeFromCart(item: { product: Product, size: string }): void {
    this.productService.removeFromCart(item.product, item.size);
    this.cartItems = this.productService.getCart(); 
    this.calculateTotal
  }

}