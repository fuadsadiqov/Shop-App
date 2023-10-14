import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { RestService } from 'src/app/model/rest.service';

@Component({
  selector: 'app-item-detail-view',
  templateUrl: './item-detail-view.component.html',
  styleUrls: ['./item-detail-view.component.css']
})
export class ItemDetailViewComponent implements OnInit{

  constructor(private route: ActivatedRoute, private restService: RestService){}

  public product: Product | undefined;

  ngOnInit(): void {
    this.getItemDetail();
  }
  getItemDetail(){
    this.route.params.subscribe(param => {
      const id = param['id']
      this.restService.getProducts()
      .subscribe(productResponse => {
        this.product = productResponse.find(productItem => productItem.id == id);
      })
    })
  }
}
