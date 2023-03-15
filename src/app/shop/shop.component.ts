import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Category } from "../model/category.model";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',
    styles: [`
        .pt-100 {padding-top: 100px}
    `]
})
export class ShopComponent{
    public selectedCategory: any
    public productsPerPage = 3
    public selectedPage = 1

    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository,
        private cart: Cart
    ){} 
    get products(): Product[]{
        let index = (this.selectedPage - 1) * this.productsPerPage
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
    get categories(): Category[]{
        return this.categoryRepository.getCategories()
    }
    changeCategory(newCategory?: Category){
        this.selectedCategory = newCategory     
        console.log(this.selectedCategory);
    }
    addProductToCart(product: Product){
        this.cart.addItem(product)
    }
}