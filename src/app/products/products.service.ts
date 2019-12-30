import { ProductListComponent } from './product-list/product-list.component';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable()
export class ProductService {
  productSelected = new EventEmitter<Product>();

  private products: Product[] = [
    new Product(
      'HR Automation',
      'Human Resource',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
      ),
    new Product('AI ML',
      'Artificial Intelligence',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg')
  ];

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }
}
