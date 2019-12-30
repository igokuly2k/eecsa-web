import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Service } from '../service.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
  providers: [ServicesService]
})
export class ServiceDetailComponent implements OnInit {
  service: Service;
  id: number;
  constructor(private serviceService: ServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.route.params
  .subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.service = this.serviceService.getService(this.id);
    }
  );
  }

}
