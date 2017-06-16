import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {TripService} from "../../services/trip.service";
import {Trips} from "./Trip";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  destination: String;
  trips: Trips[];
  /*trips = [{
   destination: "adsd",
   date: "dadsa",
   tripName: "adsa",
   description: "sda"

   },
   {
   destination: "dadsas",
   date: "dadsa",
   tripName: "dasds",
   description: "dads"
   }
   ];*/


  click(index) {
    //this.trips[index].likes = this.trips[index].likes + 1;
  }

  constructor(private tripService: TripService, private router: Router) {
    this.tripService.getTrips().subscribe(trips => {
      //  this.trips = trips.trips;
      //},
      //err => {
      this.trips = trips;
      //return false;
    });
    ;
  }

  ngOnInit() {
    /* this.tripService.getTrips().subscribe(trips => {
     this.trips = trips.trips;
     },
     err => {
     console.log(err);
     return false;
     });;*/
  }

  joinTrip() {

  }

  searchTrips() {
    if (this.destination.valueOf() === "All Destination"){
      console.log("All Destination");
      this.tripService.getTrips().subscribe(trips => {
        //  this.trips = trips.trips;
        //},
        //err => {
        this.trips = trips;
        //return false;
      });
    }else {
      console.log(this.destination);
      this.tripService.getTripsByDestination(this.destination).subscribe(trips => {
        this.trips = trips;
      })
    }
  }
}