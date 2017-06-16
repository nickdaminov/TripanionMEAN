import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

destination:String;
trips = [{
destination:"dsds",
likes:12,
description:"vdv",
going:12
},
{
destination:"dsds",
likes:12,
going:12,
description:"dsdgfg"
}
];

click(index) {
  this.trips[index].likes = this.trips[index].likes + 1;
}

  constructor() { }

  ngOnInit() {
  }

}
