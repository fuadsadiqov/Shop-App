import { Component } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css', '../../admin.component.css']
})
export class CategoryListComponent {
  
  constructor(private repository: CategoryRepository){}

  getCategoriesList(): Category[]{
    return this.repository.getCategories()
  }
  deleteCategory(category: Category){
    this.repository.deleteCategory(category)
  }
}
