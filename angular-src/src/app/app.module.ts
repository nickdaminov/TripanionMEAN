import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TripPageComponent } from './components/trip-page/trip-page.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import {TripService} from './services/trip.service';

import { ModalModule } from 'ng2-modal-dialog/modal.module';
//import { TripPageComponent} from './components/trip-page/trip-page.component';

//import { NgModule } from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'createTrip', component: CreateTripComponent},
  {path:'editProfile', component:EditProfileComponent},
  {path:'tripPage', component:TripPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    CreateTripComponent,
    TripPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    Ng2Bs3ModalModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, TripService, DashboardComponent, TripPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
