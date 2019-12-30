import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import { JobService } from '../jobs.service';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  providers: [JobService]
})
export class JobListComponent implements OnInit {
  jobs: Job[];
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

}
