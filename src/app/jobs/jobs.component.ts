import { Component, OnInit } from '@angular/core';
import { Job } from './job.model';
import { JobService } from './jobs.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobService]
})
export class JobsComponent implements OnInit {
  selectedJob: Job;
  constructor(private jobsService: JobService) { }

  ngOnInit() {
    this.jobsService.jobSelected
    .subscribe(
      (job: Job) => {
        this.selectedJob = job;
      }
    );
  }

}
