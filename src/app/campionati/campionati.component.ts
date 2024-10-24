import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-campionati',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campionati.component.html',
  styleUrl: './campionati.component.css'
})
export class CampionatiComponent {

  /* Current Index */

  currentIndexPopular: number = 0
  currentIndexSerieA: number = 0;
  currentIndexPremier: number = 0;
  currentIndexLaLiga: number = 0
  currentIndexMLS: number = 0
  itemsPerPage: number = 3;

  /* Categorie */

  mlsProducts: any[] = [];
  bundesligaProducts: any[] = [];
  laligaProducts: any[] = [];
  premierProducts: any[] = [];
  ligue1Products: any[] = [];
  serieAProducts: any[] = []

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    // Ottieni i prodotti per le diverse categorie
    this.serieAProducts = this.productService.getProductsByCategory('serie A');
    this.mlsProducts = this.productService.getProductsByCategory('mls');
    this.bundesligaProducts = this.productService.getProductsByCategory('bundes');
    this.laligaProducts = this.productService.getProductsByCategory('laliga');
    this.premierProducts = this.productService.getProductsByCategory('premier');
    this.ligue1Products = this.productService.getProductsByCategory('ligue1');
  }

  /* Aprire Dettagli Prodotto */

  navigateToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }

    /**
     * Metodo unico per spostare i caroselli avanti o indietro.
     * @param carouselType Tipo di carosello (es. 'serieA', 'premier', 'laliga')
     * @param direction Direzione del movimento ('next' per avanti, 'prev' per indietro)
     */
    moveSlide(carouselType: string, direction: 'next' | 'prev'): void {
      let currentIndex: number;
      let productsArray: any[];
  
      // Identifica il carosello
      switch (carouselType) {
        case 'serieA':
          currentIndex = this.currentIndexSerieA;
          productsArray = this.serieAProducts;
          break;
        case 'premier':
          currentIndex = this.currentIndexPremier;
          productsArray = this.premierProducts;
          break;
        case 'laliga':
          currentIndex = this.currentIndexLaLiga;
          productsArray = this.laligaProducts;
          break;
          case 'MLS':
            currentIndex = this.currentIndexMLS;
            productsArray = this.mlsProducts;
            break;
        default:
          return; // Caso sconosciuto, non fare nulla
      }
  
      // Calcola il nuovo indice in base alla direzione
      if (direction === 'next') {
        if (currentIndex + this.itemsPerPage < productsArray.length) {
          currentIndex += this.itemsPerPage;
        }
      } else if (direction === 'prev') {
        if (currentIndex - this.itemsPerPage >= 0) {
          currentIndex -= this.itemsPerPage;
        }
      }
  
      // Aggiorna l'indice corrispondente
      switch (carouselType) {
        case 'serieA':
          this.currentIndexSerieA = currentIndex;
          break;
        case 'premier':
          this.currentIndexPremier = currentIndex;
          break;
        case 'laliga':
          this.currentIndexLaLiga = currentIndex;
          break;
          case 'MLS':
            this.currentIndexMLS = currentIndex;
            break;
      }
    }
  
    /**
     * Metodo unico per ottenere lo stile di trasformazione del carosello.
     * @param carouselType Tipo di carosello (es. 'serieA', 'premier', 'laliga')
     * @returns stringa CSS per la trasformazione
     */
    getTransformStyle(carouselType: string): string {
      let currentIndex: number;
  
      // Identifica il carosello
      switch (carouselType) {
        case 'serieA':
          currentIndex = this.currentIndexSerieA;
          break;
        case 'premier':
          currentIndex = this.currentIndexPremier;
          break;
        case 'laliga':
          currentIndex = this.currentIndexLaLiga;
          break;
          case 'MLS':
            currentIndex = this.currentIndexMLS;
            break;
        default:
          return '';
      }
  
      // Calcola lo stile di trasformazione
      return `translateX(-${(currentIndex * (100 / this.itemsPerPage))}%)`;
    }
  }
  
