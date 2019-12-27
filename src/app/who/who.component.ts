import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/1400/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
