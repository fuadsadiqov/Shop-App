import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from './category.model';
import { Order } from './order.model';
import { Product } from './product.model';
// import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class RestService {
  
  // baseUrl: string = "http://localhost:3500/"
  baseUrl: string = "https://agrid-server.vercel.app/"
  token: string | undefined

  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+'products')
  } 
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+'categories')
  }
  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl+'orders')
  }
  saveOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(this.baseUrl+'orders', order)
  }
  addProduct(product: Product): Observable<Product>{ 
    return this.http.post<Product>(this.baseUrl + 'products', product, {
      headers: new HttpHeaders({  
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }
  addCategory(category: Category): Observable<Category>{ 
    return this.http.post<Category>(this.baseUrl + 'categories', category, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }
  updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(this.baseUrl + 'products/' + product.id, product, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }
  updateCategory(category: Category): Observable<Category>{
    return this.http.put<Category>(this.baseUrl + 'categories/' + category.id, category, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }
  deleteProduct(product: Product): Observable<Product>{
    return this.http.delete<Product>(this.baseUrl + 'products/' + product.id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }
  deleteCategory(category: Category): Observable<Category>{
    return this.http.delete<Category>(this.baseUrl + 'categories/' + category.id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }
  authentication(username: string, password: string): Observable<boolean>{
    return this.http.post<any>(this.baseUrl+'login', {
      username: username,
      password: password
    }).pipe(map(res => {
      this.token = res.success ? res.token : null 
      return res.success
    }))
  }
}