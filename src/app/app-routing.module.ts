import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent }
  , { path: 'product-create', component: ProductCreateComponent }
  , { path: 'product-edit', component: ProductEditComponent }
  , { path: 'product-detail', component: ProductDetailComponent }
  , { path: '', redirectTo: "product-list", pathMatch: 'full' }
  , { path: '**', redirectTo: "product-list", pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
