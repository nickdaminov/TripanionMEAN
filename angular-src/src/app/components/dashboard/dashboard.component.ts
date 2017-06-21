import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {TripService} from "../../services/trip.service";
import {Trips} from "./Trip";
import {FlashMessagesService} from 'angular2-flash-messages';
import {TripPageComponent} from "../trip-page/trip-page.component";
import { ModalService } from 'ng2-modal-dialog/modal.module';
import { AppModule } from '../../app.module';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  destination: String;
  trips: any[];
  user: any;
  username: String;
  trip:Trips;
  msg:String;

 // destination: String;
  date: String;
  tripName: String;
  description: String;
  host: String;
 // user: Object;
  members:[String];

  click(index) {
    //this.trips[index].likes = this.trips[index].likes + 1;
  }

  constructor(private tripService: TripService, private router: Router, private authService:AuthService, private flashMessage:FlashMessagesService) {
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
    this.destination = "All Destination";
    /* this.tripService.getTrips().subscribe(trips => {
     this.trips = trips.trips;
     },
     err => {
     console.log(err);
     return false;
     });;*/
    this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
          this.username = profile.user.username;
        },
        err => {
          console.log(err);
          return false;
        });
  }

  joinTrip(trip) {
    /*const _trip = {
      destination: trip.destination,
      date: trip.date,
      tripName: trip.tripName,
      description: trip.description,
      host: trip.host,
      members: trip.members

    }*/
    console.log(this.user);
    console.log(this.user._id);
    trip.members.indexOf(this.username) === -1 ? trip.members.push(this.username) : console.log("This item already exists1");
    this.user.trips.indexOf(trip._id) === -1 ? this.user.trips.push(trip._id) : console.log("This item already exists2");
    console.log("trip is");

    console.log(trip);
    this.tripService.addMember(trip).subscribe(data => {});
    this.authService.updateUser(this.user).subscribe(data => {
      if(data){
        this.flashMessage.show('Joined Trip', {cssClass: 'alert-success', timeout: 3000});
        // this.router.navigate(['/profile']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        // this.router.navigate(['/editProfile']);
      }
    });

  }

  sendMessage(trip) {
    /*const _trip = {
     destination: trip.destination,
     date: trip.date,
     tripName: trip.tripName,
     description: trip.description,
     host: trip.host,
     members: trip.members

     }*/
    //console.log(this.user);
    //console.log(this.user._id);
    //trip.members.indexOf(this.username) === -1 ? trip.members.push(this.username) : console.log("This item already exists1");
    //this.user.trips.indexOf(trip._id) === -1 ? this.user.trips.push(trip._id) : console.log("This item already exists2");

    trip.chat.push(this.username + " : " + this.msg)
    console.log("trip is");

    console.log(trip);
    this.tripService.sendMsg(trip).subscribe(data => {});
    /*this.authService.updateUser(this.user).subscribe(data => {
      if(data){
        this.flashMessage.show('Joined Trip', {cssClass: 'alert-success', timeout: 3000});
        // this.router.navigate(['/profile']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        // this.router.navigate(['/editProfile']);
      }
    });*/

  }
  tripInfo(){


    //this.tripPage.setTrip(trip)/*.subscribe(data => {
     //if (data.success) {
    //    this.flashMessage.show('Got Trip', {cssClass: 'alert-success', timeout: 3000});
      //} else {
    //    this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/createTrip']);
      //}
    //});*/
    const trip = {
      destination: this.destination,
      date: this.date,
      tripName: this.tripName,
      description: this.description,
      host: this.host,
      members: this.members
    }

    return this.trip;

  }

  searchTrips() {
    console.log(this.destination);

    if (this.destination.valueOf() == "All Destination") {
      //console.log("All Destination");
      this.tripService.getTrips().subscribe(trips => {
        //  this.trips = trips.trips;
        //},
        //err => {
        this.trips = trips;
        //return false;
      });
    } else {
      //console.log(this.destination);
      this.tripService.getTripsByDestination(this.destination).subscribe(trips => {
        this.trips = trips;
      })
    }
  }
}
