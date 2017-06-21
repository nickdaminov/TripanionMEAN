import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TripService} from "../../services/trip.service";
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ORDERBY_PROVIDERS} from "../../orderBy";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user:any;
    trips:any[];
    upcomingTrips:any[];
    pastTrips:any[];

    constructor(private tripService: TripService, private router: Router, private authService:AuthService, private flashMessage:FlashMessagesService) {
      this.authService.getProfile().subscribe(profile => {
              this.user = profile.user;

          },
          err => {
              console.log(err);
              return false;
          });
      this.tripService.getTrips().subscribe(trips => {
        this.trips = trips;

        //Initialse Trips
        this.pastTrips = [];
        this.upcomingTrips = [];
        var currentDate = new Date().toISOString().slice(0,10);
        var trip_i;
        for(trip_i in this.trips) {
          var member_i;
          for(member_i in this.trips[trip_i].members) {
            if(this.trips[trip_i].members[member_i] === this.user.username) {
              if(this.trips[trip_i].date > currentDate) {
                this.upcomingTrips.push(this.trips[trip_i]);
              } else {
                this.pastTrips.push(this.trips[trip_i]);
              }
            }
          }
        }
      });
    }
    ngOnInit() {
    }

}
