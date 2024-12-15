import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../products.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  selectedSize: string = '';
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.productService.getProductById(productId)
  }

  addToCart(): void {
    if (this.product && this.selectedSize && this.quantity > 0) {
      this.productService.addToCart(this.product, this.quantity, this.selectedSize);
      alert('Prodotto aggiunto al carrello!');
    } else {
      alert('Seleziona una taglia e una quantità valida!');
    }
  }
}


