import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  repassword: String;
  nationality: String;
  countryOfResident: String;

  constructor(private validateService: ValidateService, private flashMessage:FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      nationality: this.nationality,
      countryOfResident: this.countryOfResident
    }
    var containsError = false;
    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }

    //Validate Password
    if(user.password !== this.repassword){
      this.flashMessage.show('Passwords do not match', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }
    if(!this.validateService.validatePassword(user.password)){
      this.flashMessage.show('Please use a valid password', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }

    // Validate Nationality
    if(!this.validateService.validateNationality(user.nationality)){
      this.flashMessage.show('Please choose your Nationality', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }

    // Validate Country Of Resident
    if(!this.validateService.validateCountryOfResident(user.nationality)){
      this.flashMessage.show('Please choose your Country Of Resident', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }
    // If any error occured, stop here
    if(containsError == true) return false;

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

  }

}
