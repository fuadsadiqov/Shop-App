import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'main', component: AdminComponent,
   canActivate: [
    // AuthGuard
  ], children: [
    {path: 'products/:mode/:id', component: ProductFormComponent},
    {path: 'products/:mode', component: ProductFormComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'categories/:mode/:id', component: CategoryFormComponent},
    {path: 'categories/:mode', component: CategoryFormComponent},
    {path: 'categories', component: CategoryListComponent},
  ]},
  // {path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
