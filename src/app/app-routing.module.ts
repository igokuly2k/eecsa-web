import { WhoComponent } from './who/who.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {path: '', component: WhoComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'jobs', component: JobsComponent},
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
