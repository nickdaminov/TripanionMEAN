import { Component, OnInit } from '@angular/core';
import {Trips} from "../dashboard/Trip";
import {DashboardComponent} from "../dashboard/dashboard.component"
import {Router} from "@angular/router";
//import { Component } from '@angular/core';
import { Modal } from 'ng2-modal-dialog/modal.module';


@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})


export class TripPageComponent implements OnInit {

    closeModal: Function;
 trip: Trips;
 /* trip = {
    destination:"Paris",
    likes:12,
    description:"Lots of FUn",
    going:12
  };


  likes() {
    this.trip.likes = this.trip.likes + 1;
  }*/
 /* trip = {
  destination: "",
  date: "",
  tripName: "",
  description: "",
  host: "",
  members: []
}*/
  constructor(private router: Router) { }
  ngOnInit() {
    /*this.dashboard.tripInfo().subscribe(trip => {

          console.log(trip);
          this.trip = trip;
        },
        err => {
          console.log(err);
          return false;
        });*/
  }

  setTrip(trip) {
    this.trip = trip;
    this.trip.destination = trip.destination;
    this.trip.date = trip.date;
    this.trip.tripName = trip.tripName;
    this.trip.destination = trip.destination;
    this.trip.host = trip.host;
    this.trip.members = trip.members;

    console.log("get trip")
    console.log(this.trip);
    this.router.navigate(['/tripPage']);
    return trip;
  }

    onCancel(): void {
        this.closeModal();
    }

}
