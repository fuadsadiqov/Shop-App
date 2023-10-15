import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { WishlistService } from 'src/app/model/wishlist.service.';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() item!: Product;
  
}