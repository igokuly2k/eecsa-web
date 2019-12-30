import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { WhoComponent } from './who/who.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ServiceStartComponent } from './services/service-start/service-start.component';
import { JobStartComponent } from './jobs/job-start/job-start.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    JobsComponent,
    ServicesComponent,
    ProductsComponent,
    WhoComponent,
    NotFoundComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ServiceDetailComponent,
    ServiceListComponent,
    JobListComponent,
    JobDetailComponent,
    ProductStartComponent,
    ServiceStartComponent,
    JobStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
