import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferingsComponent } from './Components/offerings/offerings.component';
import { OfferingCreateComponent } from './Components/offering-create/offering-create.component';
import { OfferingDetailComponent } from './Components/offering-detail/offering-detail.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductCreateComponent } from './Components/product-create/product-create.component';
import { TagManagementComponent } from './Components/tag-management/tag-management.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full', data: { title: 'Home' } },
  { path: 'products', component: ProductsComponent, data: { title: 'Products' } },
  { path: 'products/create', component: ProductCreateComponent, data: { title: 'Products' } },
  { path: 'products/:id', component: ProductDetailComponent, data: { title: 'Products' } },
  { path: 'insights', component: OfferingsComponent, data: { title: 'Insights' } },
  { path: 'insights/create', component: OfferingCreateComponent, data: { title: 'Insights' } },
  { path: 'insights/:id/:name', component: OfferingDetailComponent, data: { title: 'Insights' } },
  { path: 'tags', component: TagManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

