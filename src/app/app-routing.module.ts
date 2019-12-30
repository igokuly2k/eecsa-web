import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WhoComponent } from './who/who.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ServiceStartComponent } from './services/service-start/service-start.component';
import { JobStartComponent } from './jobs/job-start/job-start.component';

const appRoutes: Routes = [
  {path: '', component: WhoComponent},
  { path: 'products', component: ProductsComponent, children: [
    {path: '', component: ProductStartComponent},
    { path: ':id', component: ProductDetailComponent}
  ]},
  { path: 'contact', component: ContactComponent},
  { path: 'services', component: ServicesComponent, children: [
    {path: '', component: ServiceStartComponent},
    { path: ':id', component: ServiceDetailComponent}
  ]},
  { path: 'jobs', component: JobsComponent, children: [
    {path: '', component: JobStartComponent},
    { path: ':id', component: JobDetailComponent}
  ]},
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
