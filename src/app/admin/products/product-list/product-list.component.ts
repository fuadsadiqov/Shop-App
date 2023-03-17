import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private productRepository: ProductRepository){}

  getProductsList(): Product[]{
    return this.productRepository.getProducts(null)
  }
  deleteProduct(product: Product){
    
  }
}
