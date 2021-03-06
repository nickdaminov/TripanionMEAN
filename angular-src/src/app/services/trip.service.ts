import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class TripService {
    trip: any;

    constructor(private http:Http) { }

    createTrip(trip){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        //return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
        return this.http.post('trips/createTrip', trip,{headers: headers})

            .map(res => res.json());
    }

   /* authenticateUser(user){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        //return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
        return this.http.post('users/authenticate', user,{headers: headers})

            .map(res => res.json());
    }*/

    getATrip(trip_id){
          //let headers = new Headers();
          //this.loadToken();
          //headers.append('Authorization', this.authToken);
          //headers.append('Content-Type','application/json');
          //return this.http.get('http://localhost:3000/users/profile',{headers: headers})
          return this.http.get('trips/trip' + trip_id)

              .map(res => res.json());
      }

  getTrips(){
        //let headers = new Headers();
        //this.loadToken();
        //headers.append('Authorization', this.authToken);
        //headers.append('Content-Type','application/json');
        //return this.http.get('http://localhost:3000/users/profile',{headers: headers})
        return this.http.get('trips/trips')

            .map(res => res.json());
    }

    getTripsByDestination(dest){
        //let headers = new Headers();
        //this.loadToken();
        //headers.append('Authorization', this.authToken);
        //headers.append('Content-Type','application/json');
        //return this.http.get('http://localhost:3000/users/profile',{headers: headers})
        return this.http.get('trips/' + dest)

            .map(res => res.json());
    }

    /*storeUserData(token, user){
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }*/

    /*loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }*/

    /*loggedIn(){
        return tokenNotExpired('id_token');
    }

    logout(){
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }*/
    addMember(trip) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');

        //return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
        return this.http.put('trips/trip/'+trip._id, JSON.stringify(trip),{headers: headers})
            .map(res => res.json());
    }

    sendMsg(trip) {
        console.log("in addMem");
        console.log(trip);
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        console.log("beforeput");

        //return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
        return this.http.put('trips/trip/'+trip._id, JSON.stringify(trip),{headers: headers})
            .map(res => res.json());
    }
}
