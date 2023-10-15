import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { RestService } from 'src/app/model/rest.service';
import { ProductRepository } from 'src/app/model/product.repository';
import { PostService } from 'src/app/model/post.service';

@Component({
  selector: 'app-item-detail-view',
  templateUrl: './item-detail-view.component.html',
  styleUrls: ['./item-detail-view.component.css']
})
export class ItemDetailViewComponent implements OnInit{

  constructor(private route: ActivatedRoute, private restService: RestService, private productRepository: ProductRepository, private postService: PostService){}
  
  public product: Product | undefined;
  public lastThreeProducts: Product[] = [];

  ngOnInit(): void {
    this.getItemDetail();
  }
  getItemDetail(){
    this.route.params.subscribe(param => {
      const id = param['id']
      this.postService.getPosts()
      .subscribe((productResponse: any) => {
        this.product = productResponse.find((productItem: any) => productItem.id == id);
        this.lastThreeProducts = productResponse.filter((productItem: any) => productItem.id != id).slice(0, 3);
      })
      // this.postService.getPosts()
      // .subscribe(productRes => console.log(productRes))
    })
  }
}
