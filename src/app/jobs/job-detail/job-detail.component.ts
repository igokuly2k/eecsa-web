import { Component, OnInit } from '@angular/core';
import { JobService } from '../jobs.service';
import { Job } from '../job.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
  providers: [JobService]
})
export class JobDetailComponent implements OnInit {
  job: Job;
  id: number;
  constructor(private productService: JobService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.job = this.productService.getJob(this.id);
      }
    );
  }

}
