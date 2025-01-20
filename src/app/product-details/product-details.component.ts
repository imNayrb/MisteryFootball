import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../products.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'], // Corretto lo stile 'styleUrls'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  selectedSize: string = ''; // Taglia selezionata dall'utente
  quantity: number = 1; // Quantità predefinita
  displayedImage: string = ''; // Per cambiare immagine dinamicamente
  sizes: string[] = ['S', 'M', 'L', 'XL']; // Elenco delle taglie disponibili

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId);
  
    if (this.product && this.product.image) {
      this.displayedImage = this.product.image;
    } else {
      this.displayedImage = '/assets/fallback-image.jpg'; // Immagine di fallback
    }
  }

  changeImage(newImage: string | undefined): void {
    if (newImage) {
      this.displayedImage = newImage;
    } else {
      console.warn('L\'immagine fornita è undefined, verrà usata un\'immagine di fallback.');
      this.displayedImage = '/assets/fallback-image.jpg'; // Immagine di fallback
    }
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
