import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Category } from "../model/category.model";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'
})
export class ShopComponent{
    public selectedCategory: any
    public productsPerPage = 4
    public selectedPage = 1
    public selectedProducts : Product[] = []
    public filteredProducts!: Product[]

    constructor(private productRepository: ProductRepository){} 

    get products(): Product[]{
        let index = (this.selectedPage - 1) * this.productsPerPage
        
        this.selectedProducts = this.productRepository
        .getProducts(this.selectedCategory)
        
        return this.productRepository
        .getProducts(this.selectedCategory)
        .slice(index, index + this.productsPerPage)
    }
    searchProduct(value: string){
        this.filteredProducts = this.products.filter((product: Product) => product.name?.toLowerCase().includes(value.toLowerCase()))
        console.log(this.filteredProducts);
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