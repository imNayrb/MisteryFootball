import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { 
      id: 0, 
      name: 'Maglietta Brasile',
      price: 35.00, 
      image: '/assets/Brasile-P.jpg',
      image2: '/assets/Brasile1.jpg',
      image3: '/assets/Brasile2.jpg',
      image4: '/assets/Brasile3.jpg',
      image5: '/assets/Brasile4.jpg',
      year: '2015/2016', 
      categories: ['popular','national'] 
    },
    { 
      id: 1, 
      name: 'Maglietta Fiorentina', 
      price: 35.00, 
      image: '/assets/Fiorentina-P.jpg',
      image2: '/assets/Fiorentina1.jpg',
      image3: '/assets/Fiorentina2.jpg',
      image4: '/assets/Fiorentina3.jpg',
      image5: '/assets/Fiorentina4.jpg', 
      year: '2020/2021', 
      categories: ['serie A'] 
    },
    { 
      id: 2, 
      name: 'Maglietta Man UTD', 
      price: 35.00, 
      image: '/assets/ManUTD-P.jpg',
      image2: '/assets/ManUTD1.jpg',
      image3: '/assets/ManUTD2.jpg',
      image4: '/assets/ManUTD3.jpg',
      image5: '/assets/ManUTD4.jpg', 
      year: '2030/2031', 
      categories: ['popular','premier'] 
    },
    { 
      id: 3, 
      name: 'Maglietta Milan', 
      price: 35.00, 
      image: '/assets/Milan-P.jpg',
      image2: '/assets/Milan1.jpg',
      image3: '/assets/Milan2.jpg',
      image4: '/assets/Milan3.jpg',
      image5: '/assets/Milan4.jpg', 
      year: '2040/2041', 
      categories: ['serie A', 'popular'] 
    },
    { 
      id: 4, 
      name: 'Maglietta Liverpool', 
      price: 35.00, 
      image: '/assets/Liverpool-P.jpg',
      image2: '/assets/Liverpool1.jpg',
      image3: '/assets/Liverpool2.jpg',
      image4: '/assets/Liverpool3.jpg',
      image5: '/assets/Liverpool4.jpg', 
      year: '2030/2031', 
      categories: ['popular','premier'] 
    },
    { 
      id: 5, 
      name: 'Maglietta Napoli', 
      price: 35.00, 
      image: '/assets/Napoli-P.jpg',
      image2: '/assets/Napoli1.jpg',
      image3: '/assets/Napoli2.jpg',
      image4: '/assets/Napoli3.jpg',
      image5: '/assets/Napoli4.jpg',
      year: '2030/2031', 
      categories: ['serie A'] 
    },
    { 
      id: 6, 
      name: 'Maglietta Arsenal', 
      price: 35.00, 
      image: '/assets/Arsenal-P.jpg',
      image2: '/assets/Arsenal1.jpg',
      image3: '/assets/Arsenal2.jpg',
      image4: '/assets/Arsenal3.jpg',
      image5: '/assets/Arsenal4.jpg', 
      year: '2030/2031', 
      categories: ['popular','premier'] 
    },
    { 
      id: 7, 
      name: 'Maglietta Francia', 
      price: 35.00, 
      image: '/assets/Francia-P.jpg',
      image2: '/assets/Francia1.jpg',
      image3: '/assets/Francia2.jpg',
      image4: '/assets/Francia3.jpg',
      image5: '/assets/Francia4.jpg', 
      year: '2030/2031', 
      categories: ['national'] 
    },
    { 
      id: 8, 
      name: 'Maglietta Italia', 
      price: 35.00, 
      image: '/assets/Italia-P.jpg',
      image2: '/assets/Italia1.jpg',
      image3: '/assets/Italia2.jpg',
      image4: '/assets/Italia3.jpg',
      image5: '/assets/Italia4.jpg', 
      year: '2030/2031', 
      categories: ['national'] 
    },
    { 
      id: 9, 
      name: 'Maglietta Miami', 
      price: 35.00, 
      image: '/assets/Miami-P.jpg',
      image2: '/assets/Miami1.jpg',
      image3: '/assets/Miami2.jpg',
      image4: '/assets/Miami3.jpg',
      image5: '/assets/Miami4.jpg', 
      year: '2030/2031', 
      categories: ['mls'] 
    },
    { 
      id: 9, 
      name: 'Maglietta Valencia', 
      price: 35.00, 
      image: '/assets/Valencia-P.jpg',
      image2: '/assets/Valencia1.jpg',
      image3: '/assets/Valencia2.jpg',
      image4: '/assets/Valencia3.jpg',
      image5: '/assets/Valencia4.jpg', 
      year: '2030/2031', 
      categories: ['laliga'] 
    },
  ];

  constructor() { }

  // Metodo per ottenere tutti i prodotti
  getAllProducts() {
    return this.products;
  }

  // Metodo per filtrare i prodotti per categoria
  getProductsByCategory(category: string) {
    const filteredProducts = this.products.filter(product => product.categories.includes(category));
    console.log(`Filtrati per categoria: ${category}`, filteredProducts);
    return filteredProducts;
  }

  getProductById(id:number): Product | undefined{
    return this.products.find(product => product.id === id)
  }
  

}
