import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { RestService } from 'src/app/model/rest.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css',  '../../admin.component.css']
})
export class ProductFormComponent {
  
  editing: boolean = false
  product: any = new Product()
  categories: Category[] = []

  constructor(private activeRoute: ActivatedRoute, private repository: ProductRepository, private categoryRepository: RestService, private router: Router){
    this.editing = this.activeRoute.snapshot.params['mode'] == "edit"
    if(this.editing){
      this.product = repository.getProduct(activeRoute.snapshot.params['id'])
    }
    this.categoryRepository.getCategories()
    .subscribe(res => {
      this.categories = res
    })    
  }

  save(form: NgForm){
    this.repository.saveProduct(this.product)
    this.router.navigateByUrl('/admin/main/products')
  } 
}
