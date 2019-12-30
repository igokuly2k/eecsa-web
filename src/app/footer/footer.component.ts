import { Service } from './../services/service.model';
import { Job } from './../jobs/job.model';
import { Product } from './../products/product.model';
import { JobService } from './../jobs/jobs.service';
import { ProductService } from './../products/products.service';
import { ServicesService } from './../services/services.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ProductService, JobService, ServicesService]
})
export class FooterComponent implements OnInit {

  products: Product[];
  services: Service[];
  jobs: Job[];

  constructor(private productService: ProductService, private jobService: JobService, private servicesService: ServicesService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.services = this.servicesService.getServices();
    this.jobs = this.jobService.getJobs();
  }

}
