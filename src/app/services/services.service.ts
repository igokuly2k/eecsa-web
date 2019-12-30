import { EventEmitter, Injectable } from '@angular/core';
import { Service } from './service.model';
@Injectable()
export class ServicesService {
  serviceSelected = new EventEmitter<Service>();

  private services: Service[] = [
    new Service(
      'HR Automation',
      'Human Resource',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
      ),
    new Service('AI ML',
      'Artificial Intelligence',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg')
  ];

  getServices() {
    return this.services.slice();
  }

  getService(index: number) {
    return this.services[index];
  }
}
