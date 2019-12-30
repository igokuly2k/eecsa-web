import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Service } from './service.model';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServicesService]
})
export class ServicesComponent implements OnInit {
  selectedService: Service;

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.serviceSelected
    .subscribe(
      (service: Service) => {
        this.selectedService = service;
      }
    );
  }

}
