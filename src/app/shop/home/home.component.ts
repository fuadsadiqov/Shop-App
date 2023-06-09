import { Component } from '@angular/core';
import { newsdata } from 'newsData';
import { NewsInterface } from 'src/app/model/news.interface';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public selectedCategory: any
  public productsPerPage = 3
  public selectedPage = 1
  public newsData: NewsInterface[] = newsdata.slice(0, 4)

  constructor(
    private productRepository: ProductRepository,
  ){} 
  get products(): Product[]{
      let index = (this.selectedPage - 1) * this.productsPerPage
      
      return this.productRepository
              .getProducts(this.selectedCategory)
              .slice(index, index + this.productsPerPage)
  }
  
}
