import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user:any;

  constructor(private validateService: ValidateService, private flashMessage:FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
      this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
          },
          err => {
              console.log(err);
              return false;
          });
  }

  onUpdateSubmit(){

    var containsError = false;
    // Required Fields
    if(!this.validateService.validateRegister(this.user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }

    // Validate Email
    if(!this.validateService.validateEmail(this.user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }

    //Validate Password
    // if(user.password !== this.repassword){
    //   this.flashMessage.show('Passwords do not match', {cssClass: 'alert-danger', timeout: 3000});
    //   containsError = true;
    // }
    if(!this.validateService.validatePassword(this.user.password)){
      this.flashMessage.show('Please use a valid password', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }

    // Validate Nationality
    if(!this.validateService.validateNationality(this.user.nationality)){
      this.flashMessage.show('Please choose your Nationality', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }
    console.log("hello1");
    // Validate Country Of Resident
    if(!this.validateService.validateCountryOfResident(this.user.nationality)){
      this.flashMessage.show('Please choose your Country Of Resident', {cssClass: 'alert-danger', timeout: 3000});
      containsError = true;
    }
    // If any error occured, stop here
    if(containsError == true) return false;
    // update user
    this.authService.updateUser(this.user).subscribe(data => {
      if(data){
        this.flashMessage.show('Submited Change Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/profile']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/editProfile']);
      }
    });
  }


}
