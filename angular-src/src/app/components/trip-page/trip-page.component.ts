import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})


export class TripPageComponent implements OnInit {

  trip = {
    destination:"Paris",
    likes:12,
    description:"Lots of FUn",
    going:12
  };

  likes() {
    this.trip.likes = this.trip.likes + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
