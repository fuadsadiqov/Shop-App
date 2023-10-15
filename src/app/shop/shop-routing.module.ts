import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopViewComponent } from './shop-view/shop-view.component';
import { ItemDetailViewComponent } from './item-detail-view/item-detail-view.component';
import { ShopComponent } from './shop.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { AuthGuard } from '../admin/auth.guard';
import { ShopGuard } from './shop.guard';

const routes: Routes = [
  {
    path: '', component: ShopComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent},
      {path: 'shop', component: ShopViewComponent},
      {path: 'home', component: HomeComponent},
      {path: 'item/:id', component: ItemDetailViewComponent},
      {path: 'search', component: SearchViewComponent},
      {path: 'login', component: LoginPageComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
      {path: 'register', component: RegisterPageComponent},
      {path: 'new-item', component: AddNewItemComponent, canActivate: [ShopGuard], canActivateChild: [ShopGuard]}
    ]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }