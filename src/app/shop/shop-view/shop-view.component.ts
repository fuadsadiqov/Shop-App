import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.css']
})
export class ShopViewComponent {
  public selectedCategory: any
  public productsPerPage = 4
  public selectedPage = 1
  public selectedProducts : Product[] = []

  constructor(private productRepository: ProductRepository){} 

  get products(): Product[]{
      let index = (this.selectedPage - 1) * this.productsPerPage
      
      this.selectedProducts = this.productRepository
      .getProducts(this.selectedCategory)
      
      return this.productRepository
      .getProducts(this.selectedCategory)
      .slice(index, index + this.productsPerPage)
  }
  get pageNumbers(): number[]{
      return Array(Math.ceil(this.productRepository
          .getProducts(this.selectedCategory).length/this.productsPerPage))
          .fill(0)
          .map((a, i) => i + 1)
  } 
  changePage(page: number){
      this.selectedPage = page
  }
  changePageSize(size: any){
      this.productsPerPage = size.value
      this.changePage(1);
  }
  getCategory(category: Category){
      this.selectedCategory = category
  }
}
