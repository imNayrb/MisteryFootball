import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../product';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeIT from '@angular/common/locales/it';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: { product: Product, quantity: number, size: string }[] = [];
  totalAmount: number = 0;
  shippingCost: number = 5;
  discountCode: string = '';
  discountAmount: number = 0;
  validDiscountCode: string = 'SCONTO10';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.getCart();
    this.calculateTotal()
  }

  calculateTotal(): void {
    let total = this.cartItems.reduce((total, item) => total + this.getTotalPrice(item), 0) + this.shippingCost;

    if (this.discountAmount > 0) {
      total -= this.discountAmount;
    }

    this.totalAmount = Math.max(total, 0);
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
    this.calculateTotal()
  }

  updateShippingCost(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.shippingCost = parseFloat(selectElement.value);
    this.calculateTotal(); 
  }

  applyDiscount(): void {
    if (this.discountCode === this.validDiscountCode) {
      this.discountAmount = 10; 
    } else {
      this.discountAmount = 0;
    }
    this.calculateTotal();
  }

}