import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/productrest';

  private cart: { product: Product, quantity: number, size: string }[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/api/productrest/category?category=${category}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/api/productrest/${id}`);
  }

  addToCart(product: Product, quantity: number, size: string) {
    const existingProduct = this.cart.find(item => item.product.id === product.id && item.size === size);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.cart.push({ product, quantity, size });
    }
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(product: Product, size: string): void {
    this.cart = this.cart.filter(item => !(item.product.id === product.id && item.size === size));
  }

  updateCartItem(product: Product, quantity: number, size: string): void {
    const existingItem = this.cart.find(item => item.product.id === product.id && item.size === size);
    if (existingItem) {
      existingItem.quantity = quantity;
    }
  }
}
