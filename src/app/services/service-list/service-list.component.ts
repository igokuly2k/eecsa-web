import { Component, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
  providers: [ServicesService]
})
export class ServiceListComponent implements OnInit {
  services: Service[];
  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.services = this.servicesService.getServices();
  }

}
