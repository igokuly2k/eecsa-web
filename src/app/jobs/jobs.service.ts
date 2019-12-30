import { EventEmitter, Injectable } from '@angular/core';
import { Job } from './job.model';
@Injectable()
export class JobService {
  jobSelected = new EventEmitter<Job>();

  private jobs: Job[] = [
    new Job(
      'HR Automation',
      'Human Resource',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
      ),
    new Job('AI ML',
      'Artificial Intelligence',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg')
  ];

  getJobs() {
    return this.jobs.slice();
  }

  getJob(index: number) {
    return this.jobs[index];
  }
}
