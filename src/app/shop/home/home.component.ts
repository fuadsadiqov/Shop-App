import { Component, OnInit, ViewChild } from '@angular/core';
import { newsdata } from 'newsData';
import { NewsInterface } from 'src/app/model/news.interface';
import { PostService } from 'src/app/model/post.service';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public selectedCategory: any
  public productsPerPage = 3
  public selectedPage = 1
  public products: Product[] = []
  public organicProducts: Product[] = []

  public newsData: NewsInterface[] = newsdata.slice(0, 4)

  constructor(
    private productRepository: ProductRepository,
    private postService: PostService
  ){} 
  getOrganicProducts(){
    this.postService.getPosts()
    .subscribe((res: Product[] | any) => this.organicProducts = res.slice(res.length - 3, 3));
  }
  
  ngOnInit(): void { 
    this.getProducts();
    this.getOrganicProducts();
  }

  getProducts(){
    this.postService.getPosts()
    .subscribe((res: Product[] | any) => this.products = res.slice(0, 3));
  }
}
