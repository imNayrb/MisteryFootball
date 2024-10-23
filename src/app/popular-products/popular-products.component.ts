import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  imports: [CommonModule],
  styleUrls: ['./popular-products.component.css'],
  standalone: true,
})
export class PopularProductsComponent implements OnInit {
  @Input() popularProducts: { name: string, price: number | undefined , imageUrl: string }[] = [];

  currentIndex: number = 0;
  translateX: number = 0;
  itemWidth: number = 300;

  ngOnInit() {

  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  next(): void {
    if (this.currentIndex < this.popularProducts.length - 1) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  updateCarousel(): void {
    this.translateX = -this.currentIndex * this.itemWidth;
  }
}
