import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {TripService} from '../../services/trip.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {DashboardComponent} from '../dashboard/dashboard.component';


@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  destination: String;
  date: String;
  tripName: String;
  description: String;

  constructor(private tripService: TripService,  private flashMessage:FlashMessagesService, private router: Router, private dashboard: DashboardComponent) {}

  ngOnInit() {
  }

  onCreationSubmit() {
    const trip = {
      destination: this.destination,
      date: this.date,
      tripName: this.tripName,
      description: this.description
    }


    this.tripService.createTrip(trip).subscribe(data => {
      this.dashboard.trips.push(trip);
      if (data.success) {
        this.flashMessage.show('Trip Created', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/createTrip']);
      }
    });

  }

  /*onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }*/

}
