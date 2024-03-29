import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { Product } from "./product.model";
import { RestService } from "./rest.service";
import { Database } from '@angular/fire/database'
import { PostService } from "./post.service";

@Injectable()
export class ProductRepository implements OnInit{
    private products: Product[] = []

    constructor(private restService: RestService, private postService: PostService){
        this.restService
        .getProducts()
        .subscribe(products => this.products = products)    
    }
    ngOnInit(): void {
    }
    getProduct(id: number):Product | undefined{
        return this.products.find(i=>i.id == id);
    }
    getProducts(category: Category | null): Product[]{
        if(category){
            return this.products.filter(p => p.category === category?.name)
        }
        else{
            return this.products
        }
    }
    
    saveProduct(product: Product){
        if(product.id == undefined || product.id == null || product.id == 0){
            this.restService.addProduct(product)
                .subscribe(p => this.products.push(p))
        }
        else{
            this.restService.updateProduct(product)
            .subscribe(p => {
                this.products.splice(this.products.findIndex(pr => pr.id == product.id), 1, product)
            })
        }
    }
    deleteProduct(product: Product){
        this.restService.deleteProduct(product)
            .subscribe(p => this.products.splice(this.products.findIndex(p => p.id === product.id)?.valueOf(), 1))
    }

}