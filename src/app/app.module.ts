import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { AdminModule } from './admin/admin.module';
import { ShopComponent } from './shop/shop.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { HomeComponent } from './shop/home/home.component';
import { AboutComponent } from './shop/about/about.component';
import { NewsComponent } from './shop/news/news.component';
import { ContactComponent } from './shop/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'news', component: NewsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'cart', component: CartDetailComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
      {path: '**', redirectTo: "/home"},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
