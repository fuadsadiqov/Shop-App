import { Component } from '@angular/core';
import { newsdata } from 'newsData';
import { NewsInterface } from 'src/app/model/news.interface';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent {
  newsData: NewsInterface[] = newsdata
}
