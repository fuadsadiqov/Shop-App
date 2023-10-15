import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Cart } from 'src/app/model/cart.model';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { PostService } from 'src/app/model/post.service';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.css']
})
export class ShopViewComponent implements OnInit{
  public selectedCategory: any
  public productsPerPage = 4
  public selectedPage = 1
  public selectedProducts : Product[] = []
  public products: Product[] = [];

  constructor(private postService: PostService){} 

  ngOnInit(): void {
    this.getProducts();
  }
  getCategory(category: Category){  
    if(category){
      this.selectedCategory = category
    }else{
      this.selectedCategory = ''
    }
    this.getProducts();
  }

  getProducts(){
    if(this.selectedCategory && this.selectedCategory.id){
      this.postService.getPosts()
      .subscribe((res: Product[] | any) => {
        const filteredProducts = res.filter((product: Product) => product.categoryId == this.selectedCategory.id)
        this.products = filteredProducts;
      })
    }else{
      this.postService.getPosts()
      .subscribe((res: Product[] | any) => this.products = res);
    }
  }
}
