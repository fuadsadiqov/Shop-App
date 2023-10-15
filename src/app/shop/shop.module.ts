import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './footer/footer.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ItemDetailViewComponent } from './item-detail-view/item-detail-view.component';
import { ShopViewComponent } from './shop-view/shop-view.component';
import { ShopRoutingModule } from "./shop-routing.module";
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { NgxSplideModule } from 'ngx-splide';
import { SearchViewComponent } from './search-view/search-view.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { LiveChatWidgetModule } from "@livechat/widget-angular";

@NgModule({
    imports: [
        ModelModule, 
        BrowserModule, 
        FormsModule, 
        RouterModule, 
        TextMaskModule, 
        ShopRoutingModule,
        NgxSplideModule,
        ReactiveFormsModule,
        LiveChatWidgetModule
    ],
    declarations: [
        ShopComponent, 
        NavbarComponent, 
        ProductListComponent, 
        CategoryListComponent, 
        ProductListComponent, 
        HomeComponent, 
        FooterComponent, 
        ItemDetailViewComponent, 
        ShopViewComponent, 
        AddNewItemComponent, 
        SearchViewComponent, 
        RegisterPageComponent, 
        LoginPageComponent, ProductItemComponent,
    ],
    exports: [ShopComponent]
})
export class ShopModule { }