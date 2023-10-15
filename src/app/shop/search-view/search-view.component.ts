import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/model/post.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit{

  public searchResult: Product[] = [];

  constructor(private route: ActivatedRoute, private postService: PostService){}

  ngOnInit(): void {
    this.getSearchingString();
  }
  getSearchingString(){
    this.route.queryParams.subscribe(param => {
      const search = param['sr']
      this.postService.getPosts()
      .subscribe((productsResponse: any) => {
        this.searchResult = productsResponse.filter( (productItem: any) => productItem.title?.toLocaleLowerCase()?.includes(search.toLocaleLowerCase()) )
      })
    })
  }
}
