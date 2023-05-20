import { Component, Input } from '@angular/core';
import { NewsInterface } from 'src/app/model/news.interface';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html'
})
export class NewsItemComponent {
  @Input('item') item!: NewsInterface
}
