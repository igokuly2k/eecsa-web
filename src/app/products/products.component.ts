import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import {ProductService} from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  selectedProduct: Product;
  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.productsService.productSelected
    .subscribe(
      (product: Product) => {
        this.selectedProduct = product;
      }
    );
  }

}
