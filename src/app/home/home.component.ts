import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCarouselComponent } from "../product-carousel/product-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
