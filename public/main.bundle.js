webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripService = (function () {
    function TripService(http) {
        this.http = http;
    }
    TripService.prototype.createTrip = function (trip) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
        return this.http.post('trips/createTrip', trip, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /* authenticateUser(user){
         let headers = new Headers();
         headers.append('Content-Type','application/json');
         //return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
         return this.http.post('users/authenticate', user,{headers: headers})
 
             .map(res => res.json());
     }*/
    TripService.prototype.getATrip = function (trip_id) {
        //let headers = new Headers();
        //this.loadToken();
        //headers.append('Authorization', this.authToken);
        //headers.append('Content-Type','application/json');
        //return this.http.get('http://localhost:3000/users/profile',{headers: headers})
        return this.http.get('trips/trip' + trip_id)
            .map(function (res) { return res.json(); });
    };
    TripService.prototype.getTrips = function () {
        //let headers = new Headers();
        //this.loadToken();
        //headers.append('Authorization', this.authToken);
        //headers.append('Content-Type','application/json');
        //return this.http.get('http://localhost:3000/users/profile',{headers: headers})
        return this.http.get('trips/trips')
            .map(function (res) { return res.json(); });
    };
    TripService.prototype.getTripsByDestination = function (dest) {
        //let headers = new Headers();
        //this.loadToken();
        //headers.append('Authorization', this.authToken);
        //headers.append('Content-Type','application/json');
        //return this.http.get('http://localhost:3000/users/profile',{headers: headers})
        return this.http.get('trips/' + dest)
            .map(function (res) { return res.json(); });
    };
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
    TripService.prototype.addMember = function (trip) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
        return this.http.put('trips/trip/' + trip._id, JSON.stringify(trip), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TripService.prototype.sendMsg = function (trip) {
        console.log("in addMem");
        console.log(trip);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log("beforeput");
        //return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
        return this.http.put('trips/trip/' + trip._id, JSON.stringify(trip), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TripService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], TripService);
    return TripService;
    var _a;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/trip.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.nationality == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePassword = function (password) {
        //Have no requirement yet
        return true;
    };
    ValidateService.prototype.validateNationality = function (nationality) {
        if (nationality === "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateCountryOfResident = function (country) {
        if (country === "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/validate.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_trip_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(tripService, router, authService, flashMessage) {
        var _this = this;
        this.tripService = tripService;
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.tripService.getTrips().subscribe(function (trips) {
            //  this.trips = trips.trips;
            //},
            //err => {
            _this.trips = trips;
            //return false;
        });
        ;
    }
    DashboardComponent.prototype.click = function (index) {
        //this.trips[index].likes = this.trips[index].likes + 1;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.destination = "All Destination";
        /* this.tripService.getTrips().subscribe(trips => {
         this.trips = trips.trips;
         },
         err => {
         console.log(err);
         return false;
         });;*/
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.joinTrip = function (trip) {
        var _this = this;
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
        this.tripService.addMember(trip).subscribe(function (data) { });
        this.authService.updateUser(this.user).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show('Joined Trip', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardComponent.prototype.sendMessage = function (trip) {
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
        trip.chat.push(this.username + " : " + this.msg);
        console.log("trip is");
        console.log(trip);
        this.tripService.sendMsg(trip).subscribe(function (data) { });
        /*this.authService.updateUser(this.user).subscribe(data => {
          if(data){
            this.flashMessage.show('Joined Trip', {cssClass: 'alert-success', timeout: 3000});
            // this.router.navigate(['/profile']);
          } else {
            this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            // this.router.navigate(['/editProfile']);
          }
        });*/
    };
    DashboardComponent.prototype.tripInfo = function () {
        //this.tripPage.setTrip(trip)/*.subscribe(data => {
        //if (data.success) {
        //    this.flashMessage.show('Got Trip', {cssClass: 'alert-success', timeout: 3000});
        //} else {
        //    this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        // this.router.navigate(['/createTrip']);
        //}
        //});*/
        var trip = {
            destination: this.destination,
            date: this.date,
            tripName: this.tripName,
            description: this.description,
            host: this.host,
            members: this.members
        };
        return this.trip;
    };
    DashboardComponent.prototype.searchTrips = function () {
        var _this = this;
        console.log(this.destination);
        if (this.destination.valueOf() == "All Destination") {
            //console.log("All Destination");
            this.tripService.getTrips().subscribe(function (trips) {
                //  this.trips = trips.trips;
                //},
                //err => {
                _this.trips = trips;
                //return false;
            });
        }
        else {
            //console.log(this.destination);
            this.tripService.getTripsByDestination(this.destination).subscribe(function (trips) {
                _this.trips = trips;
            });
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(700),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(516);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/main.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('users/' + user._id, JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:3000/users/profile',{headers: headers})
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/auth.service.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(698),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_trip_page_trip_page_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_edit_profile_edit_profile_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_create_trip_create_trip_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_trip_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__orderBy__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'createTrip', component: __WEBPACK_IMPORTED_MODULE_18__components_create_trip_create_trip_component__["a" /* CreateTripComponent */] },
    { path: 'editProfile', component: __WEBPACK_IMPORTED_MODULE_17__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */] },
    { path: 'tripPage', component: __WEBPACK_IMPORTED_MODULE_12__components_trip_page_trip_page_component__["a" /* TripPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_create_trip_create_trip_component__["a" /* CreateTripComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_trip_page_trip_page_component__["a" /* TripPageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__orderBy__["a" /* ORDERBY_PROVIDERS */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_21_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_12__components_trip_page_trip_page_component__["a" /* TripPageComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTripComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateTripComponent = (function () {
    function CreateTripComponent(tripService, flashMessage, router, dashboard, authService) {
        this.tripService = tripService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.dashboard = dashboard;
        this.authService = authService;
    }
    CreateTripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.host = profile.user.username;
            _this.members = [_this.host];
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CreateTripComponent.prototype.onCreationSubmit = function () {
        var _this = this;
        var trip = {
            destination: this.destination,
            date: this.date,
            tripName: this.tripName,
            description: this.description,
            host: this.host,
            members: this.members
        };
        this.tripService.createTrip(trip).subscribe(function (data) {
            _this.dashboard.trips.push(trip);
            if (data.success) {
                _this.flashMessage.show('Trip Created', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/createTrip']);
            }
        });
    };
    CreateTripComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-trip',
            template: __webpack_require__(699),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object])
    ], CreateTripComponent);
    return CreateTripComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/create-trip.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfileComponent = (function () {
    function EditProfileComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditProfileComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        var containsError = false;
        // Required Fields
        if (!this.validateService.validateRegister(this.user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        // Validate Email
        if (!this.validateService.validateEmail(this.user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        //Validate Password
        // if(user.password !== this.repassword){
        //   this.flashMessage.show('Passwords do not match', {cssClass: 'alert-danger', timeout: 3000});
        //   containsError = true;
        // }
        if (!this.validateService.validatePassword(this.user.password)) {
            this.flashMessage.show('Please use a valid password', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        // Validate Nationality
        if (!this.validateService.validateNationality(this.user.nationality)) {
            this.flashMessage.show('Please choose your Nationality', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        console.log("hello1");
        // Validate Country Of Resident
        if (!this.validateService.validateCountryOfResident(this.user.nationality)) {
            this.flashMessage.show('Please choose your Country Of Resident', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        // If any error occured, stop here
        if (containsError == true)
            return false;
        // update user
        this.authService.updateUser(this.user).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show('Submited Change Successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/editProfile']);
            }
        });
    };
    EditProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(701),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], EditProfileComponent);
    return EditProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/edit-profile.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(702),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/home.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(703),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/login.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(704),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(tripService, router, authService, flashMessage) {
        var _this = this;
        this.tripService = tripService;
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.tripService.getTrips().subscribe(function (trips) {
            _this.trips = trips;
            //Initialse Trips
            _this.pastTrips = [];
            _this.upcomingTrips = [];
            var currentDate = new Date().toISOString().slice(0, 10);
            var trip_i;
            for (trip_i in _this.trips) {
                var member_i;
                for (member_i in _this.trips[trip_i].members) {
                    if (_this.trips[trip_i].members[member_i] === _this.user.username) {
                        if (_this.trips[trip_i].date > currentDate) {
                            _this.upcomingTrips.push(_this.trips[trip_i]);
                        }
                        else {
                            _this.pastTrips.push(_this.trips[trip_i]);
                        }
                    }
                }
            }
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(705),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/profile.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            nationality: this.nationality,
            countryOfResident: this.countryOfResident
        };
        var containsError = false;
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        //Validate Password
        if (user.password !== this.repassword) {
            this.flashMessage.show('Passwords do not match', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        if (!this.validateService.validatePassword(user.password)) {
            this.flashMessage.show('Please use a valid password', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        // Validate Nationality
        if (!this.validateService.validateNationality(user.nationality)) {
            this.flashMessage.show('Please choose your Nationality', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        // Validate Country Of Resident
        if (!this.validateService.validateCountryOfResident(user.nationality)) {
            this.flashMessage.show('Please choose your Country Of Resident', { cssClass: 'alert-danger', timeout: 3000 });
            containsError = true;
        }
        // If any error occured, stop here
        if (containsError == true)
            return false;
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(706),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/register.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripPageComponent = (function () {
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
    function TripPageComponent(router) {
        this.router = router;
    }
    TripPageComponent.prototype.ngOnInit = function () {
        /*this.dashboard.tripInfo().subscribe(trip => {
    
              console.log(trip);
              this.trip = trip;
            },
            err => {
              console.log(err);
              return false;
            });*/
    };
    TripPageComponent.prototype.setTrip = function (trip) {
        this.trip = trip;
        this.trip.destination = trip.destination;
        this.trip.date = trip.date;
        this.trip.tripName = trip.tripName;
        this.trip.destination = trip.destination;
        this.trip.host = trip.host;
        this.trip.members = trip.members;
        console.log("get trip");
        console.log(this.trip);
        this.router.navigate(['/tripPage']);
        return trip;
    };
    TripPageComponent.prototype.onCancel = function () {
        this.closeModal();
    };
    TripPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-page',
            template: __webpack_require__(707),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], TripPageComponent);
    return TripPageComponent;
    var _a;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/trip-page.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export OrderByPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ORDERBY_PROVIDERS; });
/*
 * Example use
 *		Basic Array of single type: *ngFor="let todo of todoService.todos | orderBy : '-'"
 *		Multidimensional Array Sort on single column: *ngFor="let todo of todoService.todos | orderBy : ['-status']"
 *		Multidimensional Array Sort on multiple columns: *ngFor="let todo of todoService.todos | orderBy : ['status', '-title']"
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderByPipe = (function () {
    function OrderByPipe() {
        this.value = [];
    }
    OrderByPipe._orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined')
            a = 0;
        if (b === null || typeof b === 'undefined')
            b = 0;
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderByPipe.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        //invalid input given
        if (!input)
            return input;
        //make a copy of the input's reference
        this.value = input.slice();
        var value = this.value;
        if (!Array.isArray(value))
            return value;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc_1 ? value.sort() : value.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    var aValue = a[property_1];
                    var bValue = b[property_1];
                    var propertySplit = property_1.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc_1
                        ? OrderByPipe._orderByComparator(aValue, bValue)
                        : -OrderByPipe._orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var aValue = a[property];
                    var bValue = b[property];
                    var propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    var comparison = !desc
                        ? OrderByPipe._orderByComparator(aValue, bValue)
                        : -OrderByPipe._orderByComparator(aValue, bValue);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    OrderByPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy', pure: false }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
var ORDERBY_PROVIDERS = [
    OrderByPipe
];
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/orderBy.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/environment.js.map

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".joinButton{\n  float:right;\n}\n\n.host{\n  padding-top: 7px;\n  padding-bottom: 7px;\n  width:100%;\n  background-color: hotpink;\n  border-radius: 8px;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  margin: 2px;\n}\n\n.members{\n  background-color: mediumspringgreen;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  width:100%;\n  border-radius: 8px;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  margin: 2px;\n}\n\n.chatbox {\n  width: 100%;\n  height: 400px;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: 3px;\n  border-color: #44edc0;\n  margin: 5px;\n  overflow: auto;\n}\n\n.trips {\n  margin: auto;\n}\n\n.trip {\n\n  width:300px;\n  hieght:400px;\n  background-color: #cefff1;\n  display: inline-block;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: 3px;\n  border-color: #44edc0;\n  margin: 5px;\n}\n\n.description {\n  display: block;\n  color: #707070;\n  width: 290px;\n  font-size: 10px;\n  margin-top: 5px;\n  margin-bottom: 3px;\n  margin-left: 10px;\n  overflow-wrap: break-word;\n}\n\n.content {\n  display: block;\n  width: 280px;\n  margin-left: 15px;\n}\n\n.bigcontent {\n  display: block;\n  width: 280px;\n  height: 44px;\n  margin-left: 15px;\n  overflow: auto;\n}\n\n\n.rating {\n  background-color:  #5dade2 ;\n  border-radius: 50%;\n  text-align: center;\n\n  font-family: cursive;\n  height: 50px;\n  width: 50px;\n  float: right;\n}\n\n.buttonHolder{\n  text-align: center;\n}\n\n.joinButton{\n  float:right;\n}\n\n.host{\n  background-color: hotpink;\n}\n\n.members{\n  background-color: mediumspringgreen;\n}\n\np.capitalize {\n    text-transform: capitalize;\n}\n/* W3.CSS 4.04 Apr 2017 by Jan Egil and Borge Refsnes */\nhtml{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}[hidden],template{display:none}\na{background-color:transparent;-webkit-text-decoration-skip:objects}\na:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\ndfn{font-style:italic}mark{background:#ff0;color:#000}\nsmall{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}svg:not(:root){overflow:hidden}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}\nbutton,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}\nbutton,input{overflow:visible}button,select{text-transform:none}\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}\n[type=checkbox],[type=radio]{padding:0}\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n/* End extract */\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}\nh1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\n.w3-image{max-width:100%;height:auto}img{margin-bottom:-5px}a{color:inherit}\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\n.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block;z-index:1}\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0}\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\n.w3-main,#main{transition:margin-left .4s}\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\n.w3-bar .w3-button{white-space:normal}\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\n.w3-responsive{overflow-x:auto}\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\n.w3-display-position{position:absolute}\n.w3-circle{border-radius:50%}\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}@keyframes opac{from{opacity:0} to{opacity:1}}\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\n.w3-padding-5{padding-top:5px!important;padding-bottom:5px!important}.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\n.w3-left{float:left!important}.w3-right{float:right!important}\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\n.w3-hover-none:hover{box-shadow:none!important}\n/* Colors */\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#bbb!important}\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#ffeb3b!important}\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\n.w3-text-amber{color:#ffc107!important}\n.w3-text-aqua{color:#00ffff!important}\n.w3-text-light-blue{color:#87CEEB!important}\n.w3-text-brown{color:#795548!important}\n.w3-text-cyan{color:#00bcd4!important}\n.w3-text-blue-grey,.w3-text-blue-gray{color:#607d8b!important}\n.w3-text-light-green{color:#8bc34a!important}\n.w3-text-indigo{color:#3f51b5!important}\n.w3-text-khaki{color:#b4aa50!important}\n.w3-text-lime{color:#cddc39!important}\n.w3-text-orange{color:#ff9800!important}\n.w3-text-deep-orange{color:#ff5722!important}\n.w3-text-pink{color:#e91e63!important}\n.w3-text-purple{color:#9c27b0!important}\n.w3-text-deep-purple{color:#673ab7!important}\n.w3-text-sand{color:#fdf5e6!important}\n.w3-text-teal{color:#009688!important}\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#bbb!important}\n\n.description {\n  width: 100em;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n    color: lightseagreen;\n}"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ".navbar{\n    background-color: #44edc0;\n}"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "p.capitalize {\n    text-transform: capitalize;\n}\n/* W3.CSS 4.04 Apr 2017 by Jan Egil and Borge Refsnes */\nhtml{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}[hidden],template{display:none}\na{background-color:transparent;-webkit-text-decoration-skip:objects}\na:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\ndfn{font-style:italic}mark{background:#ff0;color:#000}\nsmall{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}svg:not(:root){overflow:hidden}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}\nbutton,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}\nbutton,input{overflow:visible}button,select{text-transform:none}\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}\n[type=checkbox],[type=radio]{padding:0}\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n/* End extract */\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}\nh1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\n.w3-image{max-width:100%;height:auto}img{margin-bottom:-5px}a{color:inherit}\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\n.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\n.w3-btn,.w3-button{border:none;display:inline-block;outline:0;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}\n.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}\n.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}\n.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block;z-index:1}\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0}\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\n.w3-main,#main{transition:margin-left .4s}\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\n.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;outline:none;display:block}\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\n.w3-bar .w3-button{white-space:normal}\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;outline:none;white-space:normal;float:none}\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}\n.w3-responsive{overflow-x:auto}\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\n.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}\n.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}\n.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\n.w3-content{max-width:980px;margin:auto}.w3-rest{overflow:hidden}\n.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}\n.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}\n.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\n.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\n.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}\n.w3-display-position{position:absolute}\n.w3-circle{border-radius:50%}\n.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}@keyframes opac{from{opacity:0} to{opacity:1}}\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\n.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\n.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\n.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}\n.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}\n.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}\n.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}\n.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}\n.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}\n.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}\n.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\n.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}\n.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}\n.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\n.w3-left{float:left!important}.w3-right{float:right!important}\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\n.w3-hover-none:hover{box-shadow:none!important}\n/* Colors */\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#bbb!important}\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#ffeb3b!important}\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\n.w3-text-amber{color:#ffc107!important}\n.w3-text-aqua{color:#00ffff!important}\n.w3-text-light-blue{color:#87CEEB!important}\n.w3-text-brown{color:#795548!important}\n.w3-text-cyan{color:#00bcd4!important}\n.w3-text-blue-grey,.w3-text-blue-gray{color:#607d8b!important}\n.w3-text-light-green{color:#8bc34a!important}\n.w3-text-indigo{color:#3f51b5!important}\n.w3-text-khaki{color:#b4aa50!important}\n.w3-text-lime{color:#cddc39!important}\n.w3-text-orange{color:#ff9800!important}\n.w3-text-deep-orange{color:#ff5722!important}\n.w3-text-pink{color:#e91e63!important}\n.w3-text-purple{color:#9c27b0!important}\n.w3-text-deep-purple{color:#673ab7!important}\n.w3-text-sand{color:#fdf5e6!important}\n.w3-text-teal{color:#009688!important}\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#bbb!important}\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ".joinButton{\n  float:right;\n}\n\n.host{\n  background-color: hotpink;\n}\n\n.members{\n  background-color: mediumspringgreen;\n}\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Please enter trip details</h2>\n<form (submit)=\"onCreationSubmit()\">\n    <div class=\"form-group\">\n        <label>Destination</label><br>\n            <select [(ngModel)]=\"destination\" name=\"destination\" class=\"form-control\">\n                <option value=\"Austria\">Austria</option>\n                <option value=\"Italy\">Italy</option>\n                <option value=\"Belgium\">Belgium</option>\n                <option value=\"Latvia\">Latvia</option>\n                <option value=\"Bulgaria\">Bulgaria</option>\n                <option value=\"Lithuania\">Lithuania</option>\n                <option value=\"Croatia\">Croatia</option>\n                <option value=\"Luxembourg\">Luxembourg</option>\n                <option value=\"Cyprus\">Cyprus</option>\n                <option value=\"Malta\">Malta</option>\n                <option value=\"Czech Republic\">Czech Republic</option>\n                <option value=\"Netherlands\">Netherlands</option>\n                <option value=\"Denmark\">Denmark</option>\n                <option value=\"Poland\">Poland</option>\n                <option value=\"Estonia\">Estonia</option>\n                <option value=\"Portugal\">Portugal</option>\n                <option value=\"Finland\">Finland</option>\n                <option value=\"Romania\">Romania</option>\n                <option value=\"France\">France</option>\n                <option value=\"Slovakia\">Slovakia</option>\n                <option value=\"Germany\">Germany</option>\n                <option value=\"Slovenia\">Slovenia</option>\n                <option value=\"Greece\">Greece</option>\n                <option value=\"Spain\">Spain</option>\n                <option value=\"Hungary\">Hungary</option>\n                <option value=\"Sweden\">Sweden</option>\n                <option value=\"Ireland\">Ireland</option>\n                <option value=\"United Kingdom\">United Kingdom</option>\n            </select>\n    </div>\n\n    <div class=\"form-group\">\n    <label>Trip date (in the format of dd/mm/yyyy)</label><br>\n    <input type=\"date\" [(ngModel)]=\"date\" name=\"date\" class=\"form-control\" >\n</div>\n\n    <!-- Host username is added -->\n    <!-- Members will be added later (as usernames as well) -->\n\n    <div class=\"form-group\">\n    <label>Trip name</label><br>\n    <input type=\"text\" [(ngModel)]=\"tripName\" name=\"tripName\" class=\"form-control\" >\n</div>\n\n    <div class=\"form-group\">\n    <label>Destination city and trip description</label><br>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" >\n</div>\n\n    <input type=\"submit\" class=\"btn btn-default\" value=\"Create\">\n</form>"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Trip Room</h2>\n\n<!-- The Grid -->\n<div class=\"w3-row-padding\">\n\n<!-- Left Column -->\n<div class=\"w3-third\">\n  <div class=\"w3-white w3-text-grey w3-card-4\">\n    <div class=\"w3-container\" style=\"padding-top:10\">\n      <form (submit)=\"searchTrips()\">\n          <div class=\"form-group\">\n              <label>Destination</label><br>\n              <select [(ngModel)]=\"destination\" name=\"destination\" class=\"form-control\">\n                  <option value=\"All Destination\">All Destination</option>\n                  <option value=\"Austria\">Austria</option>\n                  <option value=\"Italy\">Italy</option>\n                  <option value=\"Belgium\">Belgium</option>\n                  <option value=\"Latvia\">Latvia</option>\n                  <option value=\"Bulgaria\">Bulgaria</option>\n                  <option value=\"Lithuania\">Lithuania</option>\n                  <option value=\"Croatia\">Croatia</option>\n                  <option value=\"Luxembourg\">Luxembourg</option>\n                  <option value=\"Cyprus\">Cyprus</option>\n                  <option value=\"Malta\">Malta</option>\n                  <option value=\"Czech Republic\">Czech Republic</option>\n                  <option value=\"Netherlands\">Netherlands</option>\n                  <option value=\"Denmark\">Denmark</option>\n                  <option value=\"Poland\">Poland</option>\n                  <option value=\"Estonia\">Estonia</option>\n                  <option value=\"Portugal\">Portugal</option>\n                  <option value=\"Finland\">Finland</option>\n                  <option value=\"Romania\">Romania</option>\n                  <option value=\"France\">France</option>\n                  <option value=\"Slovakia\">Slovakia</option>\n                  <option value=\"Germany\">Germany</option>\n                  <option value=\"Slovenia\">Slovenia</option>\n                  <option value=\"Greece\">Greece</option>\n                  <option value=\"Spain\">Spain</option>\n                  <option value=\"Hungary\">Hungary</option>\n                  <option value=\"Sweden\">Sweden</option>\n                  <option value=\"Ireland\">Ireland</option>\n                  <option value=\"United Kingdom\">United Kingdom</option>\n              </select>\n              <div class=\"buttonHolder\" style=\"padding-top:10\">\n              <button type=\"button\" class=\"btn btn-default\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] (click)=\"searchTrips()\">Search</button>\n              </div>\n              <hr>\n              <div class=\"buttonHolder\">\n              <button type=\"button\" class=\"btn btn-default\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] [routerLink]=\"['/createTrip']\">Create Trip</button>\n              </div>\n          </div>\n      </form>\n     <p style=\"padding-bottom:10px\">\n   </div>\n </div>\n <br>\n<!-- End Left Column -->\n</div>\n\n<!-- Right Column -->\n<div class=\"w3-twothird\">\n  <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\" *ngFor=\"let trip of trips | orderBy : 'date'\">\n    <h2 class=\"w3-text-grey w3-padding-5\"><i class=\"fa fa-plane fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>{{trip.tripName}}</h2>\n    <div class=\"w3-container\">\n      <h5 class=\"w3-opacity\"><b>To {{trip.destination}}</b></h5>\n      <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>{{trip.date | date : \"EEEE, d MMMM, y\" }}</h6>\n      <p>{{trip.description}}</p>\n      <hr>\n      <!-- <form (submit)=\"tripInfo()\"> -->\n      <modal #modal>\n          <modal-header [show-close]=\"true\">\n              <h2 class=\"modal-title\">{{trip.tripName}}</h2>\n          </modal-header>\n          <modal-body>\n\n              <div class=\"container-fluid\">\n\n                  <div> Destination {{trip.destination}}, Date</div>\n\n                  <div class=\"row\">\n                      <div class=\"col-md-10\">\n                          <div class=\"chatbox\" id=\"chatbox\">\n                              <div *ngFor=\"let msgs of trip.chat; let i = index\">\n                                  <div>\n                                      {{msgs}}\n                                  </div>\n                              </div>\n                          </div>\n\n\n\n\n                          <form (submit)=\"sendMessage(trip)\">\n                              <div class=\"form-group\">\n                                  <input type=\"text\" [(ngModel)]=\"msg\" name=\"msg\" class=\"form-control\" placeholder=\"Type a message\" id=\"messageBox\" style=\"width:80%;\">\n                              </div>\n\n                              <input type=\"submit\" class=\"btn btn-default\" id=\"sendButton\" value=\"Send\">\n                          </form>\n\n\n\n\n                      </div>\n                      <div class=\"col-md-2\" >Host :\n                          <button type=\"button\" class=\"host\">{{trip.host}}\n                          </button>\n                              <div> Members :\n                                  <div  *ngFor=\"let member of trip.members; let i = index\">\n                                      <button type=\"button\" class=\"members\">\n                                          {{member}}\n                                      </button>\n                                  </div>\n                                  </div>\n                              </div>\n                      </div>\n\n                      <br />\n                      <div class=\"row\">\n                          <div class=\"col-md-10\">\n                              <div>Description : {{trip.description}}</div>\n                          </div>\n\n                      </div>\n\n                  </div>\n          </modal-body>\n          <modal-footer>\n              <button type=\"button\" class=\"btn btn-primary\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] (click)=\"joinTrip(trip)\">Join</button>\n          </modal-footer>                </modal>\n          <span style=\"display: inline;\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open('lg')\">View Infomation</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"joinTrip(trip)\">Join Trip</button>\n      </span>\n      <p style=\"padding-bottom:10px\">\n\n      <!-- </form> -->\n    </div>\n  </div>\n\n<!-- End Right Column -->\n</div>\n\n<!-- End Grid -->\n</div>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Edit You Profile</h2>\n<div *ngIf=\"user\">\n<h2>{{user.name}}</h2>\n<form (submit)=\"onUpdateSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" class=\"form-control\" disabled>\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\" disabled>\n  </div>\n  <!-- <div class=\"form-group\">\n    <label>Re-type Password</label>\n    <input type=\"password\" [(ngModel)]=\"repassword\" name=\"repassword\" class=\"form-control\">\n  </div> -->\n  <div class=\"form-group\">\n    <label>Nationality</label>\n    <select [(ngModel)]=\"user.nationality\" name=\"nationality\" class=\"form-control\" disabled>\n      <option value=\"\">-- Please Choose One --</option>\n      <option value=\"afghan\">Afghan</option>\n      <option value=\"albanian\">Albanian</option>\n      <option value=\"algerian\">Algerian</option>\n      <option value=\"american\">American</option>\n      <option value=\"andorran\">Andorran</option>\n      <option value=\"angolan\">Angolan</option>\n      <option value=\"antiguans\">Antiguans</option>\n      <option value=\"argentinean\">Argentinean</option>\n      <option value=\"armenian\">Armenian</option>\n      <option value=\"australian\">Australian</option>\n      <option value=\"austrian\">Austrian</option>\n      <option value=\"azerbaijani\">Azerbaijani</option>\n      <option value=\"bahamian\">Bahamian</option>\n      <option value=\"bahraini\">Bahraini</option>\n      <option value=\"bangladeshi\">Bangladeshi</option>\n      <option value=\"barbadian\">Barbadian</option>\n      <option value=\"barbudans\">Barbudans</option>\n      <option value=\"batswana\">Batswana</option>\n      <option value=\"belarusian\">Belarusian</option>\n      <option value=\"belgian\">Belgian</option>\n      <option value=\"belizean\">Belizean</option>\n      <option value=\"beninese\">Beninese</option>\n      <option value=\"bhutanese\">Bhutanese</option>\n      <option value=\"bolivian\">Bolivian</option>\n      <option value=\"bosnian\">Bosnian</option>\n      <option value=\"brazilian\">Brazilian</option>\n      <option value=\"british\">British</option>\n      <option value=\"bruneian\">Bruneian</option>\n      <option value=\"bulgarian\">Bulgarian</option>\n      <option value=\"burkinabe\">Burkinabe</option>\n      <option value=\"burmese\">Burmese</option>\n      <option value=\"burundian\">Burundian</option>\n      <option value=\"cambodian\">Cambodian</option>\n      <option value=\"cameroonian\">Cameroonian</option>\n      <option value=\"canadian\">Canadian</option>\n      <option value=\"cape verdean\">Cape Verdean</option>\n      <option value=\"central african\">Central African</option>\n      <option value=\"chadian\">Chadian</option>\n      <option value=\"chilean\">Chilean</option>\n      <option value=\"chinese\">Chinese</option>\n      <option value=\"colombian\">Colombian</option>\n      <option value=\"comoran\">Comoran</option>\n      <option value=\"congolese\">Congolese</option>\n      <option value=\"costa rican\">Costa Rican</option>\n      <option value=\"croatian\">Croatian</option>\n      <option value=\"cuban\">Cuban</option>\n      <option value=\"cypriot\">Cypriot</option>\n      <option value=\"czech\">Czech</option>\n      <option value=\"danish\">Danish</option>\n      <option value=\"djibouti\">Djibouti</option>\n      <option value=\"dominican\">Dominican</option>\n      <option value=\"dutch\">Dutch</option>\n      <option value=\"east timorese\">East Timorese</option>\n      <option value=\"ecuadorean\">Ecuadorean</option>\n      <option value=\"egyptian\">Egyptian</option>\n      <option value=\"emirian\">Emirian</option>\n      <option value=\"equatorial guinean\">Equatorial Guinean</option>\n      <option value=\"eritrean\">Eritrean</option>\n      <option value=\"estonian\">Estonian</option>\n      <option value=\"ethiopian\">Ethiopian</option>\n      <option value=\"fijian\">Fijian</option>\n      <option value=\"filipino\">Filipino</option>\n      <option value=\"finnish\">Finnish</option>\n      <option value=\"french\">French</option>\n      <option value=\"gabonese\">Gabonese</option>\n      <option value=\"gambian\">Gambian</option>\n      <option value=\"georgian\">Georgian</option>\n      <option value=\"german\">German</option>\n      <option value=\"ghanaian\">Ghanaian</option>\n      <option value=\"greek\">Greek</option>\n      <option value=\"grenadian\">Grenadian</option>\n      <option value=\"guatemalan\">Guatemalan</option>\n      <option value=\"guinea-bissauan\">Guinea-Bissauan</option>\n      <option value=\"guinean\">Guinean</option>\n      <option value=\"guyanese\">Guyanese</option>\n      <option value=\"haitian\">Haitian</option>\n      <option value=\"herzegovinian\">Herzegovinian</option>\n      <option value=\"honduran\">Honduran</option>\n      <option value=\"hungarian\">Hungarian</option>\n      <option value=\"icelander\">Icelander</option>\n      <option value=\"indian\">Indian</option>\n      <option value=\"indonesian\">Indonesian</option>\n      <option value=\"iranian\">Iranian</option>\n      <option value=\"iraqi\">Iraqi</option>\n      <option value=\"irish\">Irish</option>\n      <option value=\"israeli\">Israeli</option>\n      <option value=\"italian\">Italian</option>\n      <option value=\"ivorian\">Ivorian</option>\n      <option value=\"jamaican\">Jamaican</option>\n      <option value=\"japanese\">Japanese</option>\n      <option value=\"jordanian\">Jordanian</option>\n      <option value=\"kazakhstani\">Kazakhstani</option>\n      <option value=\"kenyan\">Kenyan</option>\n      <option value=\"kittian and nevisian\">Kittian and Nevisian</option>\n      <option value=\"kuwaiti\">Kuwaiti</option>\n      <option value=\"kyrgyz\">Kyrgyz</option>\n      <option value=\"laotian\">Laotian</option>\n      <option value=\"latvian\">Latvian</option>\n      <option value=\"lebanese\">Lebanese</option>\n      <option value=\"liberian\">Liberian</option>\n      <option value=\"libyan\">Libyan</option>\n      <option value=\"liechtensteiner\">Liechtensteiner</option>\n      <option value=\"lithuanian\">Lithuanian</option>\n      <option value=\"luxembourger\">Luxembourger</option>\n      <option value=\"macedonian\">Macedonian</option>\n      <option value=\"malagasy\">Malagasy</option>\n      <option value=\"malawian\">Malawian</option>\n      <option value=\"malaysian\">Malaysian</option>\n      <option value=\"maldivan\">Maldivan</option>\n      <option value=\"malian\">Malian</option>\n      <option value=\"maltese\">Maltese</option>\n      <option value=\"marshallese\">Marshallese</option>\n      <option value=\"mauritanian\">Mauritanian</option>\n      <option value=\"mauritian\">Mauritian</option>\n      <option value=\"mexican\">Mexican</option>\n      <option value=\"micronesian\">Micronesian</option>\n      <option value=\"moldovan\">Moldovan</option>\n      <option value=\"monacan\">Monacan</option>\n      <option value=\"mongolian\">Mongolian</option>\n      <option value=\"moroccan\">Moroccan</option>\n      <option value=\"mosotho\">Mosotho</option>\n      <option value=\"motswana\">Motswana</option>\n      <option value=\"mozambican\">Mozambican</option>\n      <option value=\"namibian\">Namibian</option>\n      <option value=\"nauruan\">Nauruan</option>\n      <option value=\"nepalese\">Nepalese</option>\n      <option value=\"new zealander\">New Zealander</option>\n      <option value=\"ni-vanuatu\">Ni-Vanuatu</option>\n      <option value=\"nicaraguan\">Nicaraguan</option>\n      <option value=\"nigerien\">Nigerien</option>\n      <option value=\"north korean\">North Korean</option>\n      <option value=\"northern irish\">Northern Irish</option>\n      <option value=\"norwegian\">Norwegian</option>\n      <option value=\"omani\">Omani</option>\n      <option value=\"pakistani\">Pakistani</option>\n      <option value=\"palauan\">Palauan</option>\n      <option value=\"panamanian\">Panamanian</option>\n      <option value=\"papua new guinean\">Papua New Guinean</option>\n      <option value=\"paraguayan\">Paraguayan</option>\n      <option value=\"peruvian\">Peruvian</option>\n      <option value=\"polish\">Polish</option>\n      <option value=\"portuguese\">Portuguese</option>\n      <option value=\"qatari\">Qatari</option>\n      <option value=\"romanian\">Romanian</option>\n      <option value=\"russian\">Russian</option>\n      <option value=\"rwandan\">Rwandan</option>\n      <option value=\"saint lucian\">Saint Lucian</option>\n      <option value=\"salvadoran\">Salvadoran</option>\n      <option value=\"samoan\">Samoan</option>\n      <option value=\"san marinese\">San Marinese</option>\n      <option value=\"sao tomean\">Sao Tomean</option>\n      <option value=\"saudi\">Saudi</option>\n      <option value=\"scottish\">Scottish</option>\n      <option value=\"senegalese\">Senegalese</option>\n      <option value=\"serbian\">Serbian</option>\n      <option value=\"seychellois\">Seychellois</option>\n      <option value=\"sierra leonean\">Sierra Leonean</option>\n      <option value=\"singaporean\">Singaporean</option>\n      <option value=\"slovakian\">Slovakian</option>\n      <option value=\"slovenian\">Slovenian</option>\n      <option value=\"solomon islander\">Solomon Islander</option>\n      <option value=\"somali\">Somali</option>\n      <option value=\"south african\">South African</option>\n      <option value=\"south korean\">South Korean</option>\n      <option value=\"spanish\">Spanish</option>\n      <option value=\"sri lankan\">Sri Lankan</option>\n      <option value=\"sudanese\">Sudanese</option>\n      <option value=\"surinamer\">Surinamer</option>\n      <option value=\"swazi\">Swazi</option>\n      <option value=\"swedish\">Swedish</option>\n      <option value=\"swiss\">Swiss</option>\n      <option value=\"syrian\">Syrian</option>\n      <option value=\"taiwanese\">Taiwanese</option>\n      <option value=\"tajik\">Tajik</option>\n      <option value=\"tanzanian\">Tanzanian</option>\n      <option value=\"thai\">Thai</option>\n      <option value=\"togolese\">Togolese</option>\n      <option value=\"tongan\">Tongan</option>\n      <option value=\"trinidadian or tobagonian\">Trinidadian or Tobagonian</option>\n      <option value=\"tunisian\">Tunisian</option>\n      <option value=\"turkish\">Turkish</option>\n      <option value=\"tuvaluan\">Tuvaluan</option>\n      <option value=\"ugandan\">Ugandan</option>\n      <option value=\"ukrainian\">Ukrainian</option>\n      <option value=\"uruguayan\">Uruguayan</option>\n      <option value=\"uzbekistani\">Uzbekistani</option>\n      <option value=\"venezuelan\">Venezuelan</option>\n      <option value=\"vietnamese\">Vietnamese</option>\n      <option value=\"welsh\">Welsh</option>\n      <option value=\"yemenite\">Yemenite</option>\n      <option value=\"zambian\">Zambian</option>\n      <option value=\"zimbabwean\">Zimbabwean</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Country of Resident</label>\n    <select [(ngModel)]=\"user.countryOfResident\" name=\"countryOfResident\" class=\"form-control\">\n      <option value=\"\">-- Please Choose One --</option>\n      <option value=\"Afganistan\">Afghanistan</option>\n      <option value=\"Albania\">Albania</option>\n      <option value=\"Algeria\">Algeria</option>\n      <option value=\"American Samoa\">American Samoa</option>\n      <option value=\"Andorra\">Andorra</option>\n      <option value=\"Angola\">Angola</option>\n      <option value=\"Anguilla\">Anguilla</option>\n      <option value=\"Antigua &amp; Barbuda\">Antigua &amp; Barbuda</option>\n      <option value=\"Argentina\">Argentina</option>\n      <option value=\"Armenia\">Armenia</option>\n      <option value=\"Aruba\">Aruba</option>\n      <option value=\"Australia\">Australia</option>\n      <option value=\"Austria\">Austria</option>\n      <option value=\"Azerbaijan\">Azerbaijan</option>\n      <option value=\"Bahamas\">Bahamas</option>\n      <option value=\"Bahrain\">Bahrain</option>\n      <option value=\"Bangladesh\">Bangladesh</option>\n      <option value=\"Barbados\">Barbados</option>\n      <option value=\"Belarus\">Belarus</option>\n      <option value=\"Belgium\">Belgium</option>\n      <option value=\"Belize\">Belize</option>\n      <option value=\"Benin\">Benin</option>\n      <option value=\"Bermuda\">Bermuda</option>\n      <option value=\"Bhutan\">Bhutan</option>\n      <option value=\"Bolivia\">Bolivia</option>\n      <option value=\"Bonaire\">Bonaire</option>\n      <option value=\"Bosnia &amp; Herzegovina\">Bosnia &amp; Herzegovina</option>\n      <option value=\"Botswana\">Botswana</option>\n      <option value=\"Brazil\">Brazil</option>\n      <option value=\"British Indian Ocean Ter\">British Indian Ocean Ter</option>\n      <option value=\"Brunei\">Brunei</option>\n      <option value=\"Bulgaria\">Bulgaria</option>\n      <option value=\"Burkina Faso\">Burkina Faso</option>\n      <option value=\"Burundi\">Burundi</option>\n      <option value=\"Cambodia\">Cambodia</option>\n      <option value=\"Cameroon\">Cameroon</option>\n      <option value=\"Canada\">Canada</option>\n      <option value=\"Canary Islands\">Canary Islands</option>\n      <option value=\"Cape Verde\">Cape Verde</option>\n      <option value=\"Cayman Islands\">Cayman Islands</option>\n      <option value=\"Central African Republic\">Central African Republic</option>\n      <option value=\"Chad\">Chad</option>\n      <option value=\"Channel Islands\">Channel Islands</option>\n      <option value=\"Chile\">Chile</option>\n      <option value=\"China\">China</option>\n      <option value=\"Christmas Island\">Christmas Island</option>\n      <option value=\"Cocos Island\">Cocos Island</option>\n      <option value=\"Colombia\">Colombia</option>\n      <option value=\"Comoros\">Comoros</option>\n      <option value=\"Congo\">Congo</option>\n      <option value=\"Cook Islands\">Cook Islands</option>\n      <option value=\"Costa Rica\">Costa Rica</option>\n      <option value=\"Cote DIvoire\">Cote D'Ivoire</option>\n      <option value=\"Croatia\">Croatia</option>\n      <option value=\"Cuba\">Cuba</option>\n      <option value=\"Curaco\">Curacao</option>\n      <option value=\"Cyprus\">Cyprus</option>\n      <option value=\"Czech Republic\">Czech Republic</option>\n      <option value=\"Denmark\">Denmark</option>\n      <option value=\"Djibouti\">Djibouti</option>\n      <option value=\"Dominica\">Dominica</option>\n      <option value=\"Dominican Republic\">Dominican Republic</option>\n      <option value=\"East Timor\">East Timor</option>\n      <option value=\"Ecuador\">Ecuador</option>\n      <option value=\"Egypt\">Egypt</option>\n      <option value=\"El Salvador\">El Salvador</option>\n      <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n      <option value=\"Eritrea\">Eritrea</option>\n      <option value=\"Estonia\">Estonia</option>\n      <option value=\"Ethiopia\">Ethiopia</option>\n      <option value=\"Falkland Islands\">Falkland Islands</option>\n      <option value=\"Faroe Islands\">Faroe Islands</option>\n      <option value=\"Fiji\">Fiji</option>\n      <option value=\"Finland\">Finland</option>\n      <option value=\"France\">France</option>\n      <option value=\"French Guiana\">French Guiana</option>\n      <option value=\"French Polynesia\">French Polynesia</option>\n      <option value=\"French Southern Ter\">French Southern Ter</option>\n      <option value=\"Gabon\">Gabon</option>\n      <option value=\"Gambia\">Gambia</option>\n      <option value=\"Georgia\">Georgia</option>\n      <option value=\"Germany\">Germany</option>\n      <option value=\"Ghana\">Ghana</option>\n      <option value=\"Gibraltar\">Gibraltar</option>\n      <option value=\"Great Britain\">Great Britain</option>\n      <option value=\"Greece\">Greece</option>\n      <option value=\"Greenland\">Greenland</option>\n      <option value=\"Grenada\">Grenada</option>\n      <option value=\"Guadeloupe\">Guadeloupe</option>\n      <option value=\"Guam\">Guam</option>\n      <option value=\"Guatemala\">Guatemala</option>\n      <option value=\"Guinea\">Guinea</option>\n      <option value=\"Guyana\">Guyana</option>\n      <option value=\"Haiti\">Haiti</option>\n      <option value=\"Hawaii\">Hawaii</option>\n      <option value=\"Honduras\">Honduras</option>\n      <option value=\"Hong Kong\">Hong Kong</option>\n      <option value=\"Hungary\">Hungary</option>\n      <option value=\"Iceland\">Iceland</option>\n      <option value=\"India\">India</option>\n      <option value=\"Indonesia\">Indonesia</option>\n      <option value=\"Iran\">Iran</option>\n      <option value=\"Iraq\">Iraq</option>\n      <option value=\"Ireland\">Ireland</option>\n      <option value=\"Isle of Man\">Isle of Man</option>\n      <option value=\"Israel\">Israel</option>\n      <option value=\"Italy\">Italy</option>\n      <option value=\"Jamaica\">Jamaica</option>\n      <option value=\"Japan\">Japan</option>\n      <option value=\"Jordan\">Jordan</option>\n      <option value=\"Kazakhstan\">Kazakhstan</option>\n      <option value=\"Kenya\">Kenya</option>\n      <option value=\"Kiribati\">Kiribati</option>\n      <option value=\"Korea North\">Korea North</option>\n      <option value=\"Korea Sout\">Korea South</option>\n      <option value=\"Kuwait\">Kuwait</option>\n      <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n      <option value=\"Laos\">Laos</option>\n      <option value=\"Latvia\">Latvia</option>\n      <option value=\"Lebanon\">Lebanon</option>\n      <option value=\"Lesotho\">Lesotho</option>\n      <option value=\"Liberia\">Liberia</option>\n      <option value=\"Libya\">Libya</option>\n      <option value=\"Liechtenstein\">Liechtenstein</option>\n      <option value=\"Lithuania\">Lithuania</option>\n      <option value=\"Luxembourg\">Luxembourg</option>\n      <option value=\"Macau\">Macau</option>\n      <option value=\"Macedonia\">Macedonia</option>\n      <option value=\"Madagascar\">Madagascar</option>\n      <option value=\"Malaysia\">Malaysia</option>\n      <option value=\"Malawi\">Malawi</option>\n      <option value=\"Maldives\">Maldives</option>\n      <option value=\"Mali\">Mali</option>\n      <option value=\"Malta\">Malta</option>\n      <option value=\"Marshall Islands\">Marshall Islands</option>\n      <option value=\"Martinique\">Martinique</option>\n      <option value=\"Mauritania\">Mauritania</option>\n      <option value=\"Mauritius\">Mauritius</option>\n      <option value=\"Mayotte\">Mayotte</option>\n      <option value=\"Mexico\">Mexico</option>\n      <option value=\"Midway Islands\">Midway Islands</option>\n      <option value=\"Moldova\">Moldova</option>\n      <option value=\"Monaco\">Monaco</option>\n      <option value=\"Mongolia\">Mongolia</option>\n      <option value=\"Montserrat\">Montserrat</option>\n      <option value=\"Morocco\">Morocco</option>\n      <option value=\"Mozambique\">Mozambique</option>\n      <option value=\"Myanmar\">Myanmar</option>\n      <option value=\"Nambia\">Nambia</option>\n      <option value=\"Nauru\">Nauru</option>\n      <option value=\"Nepal\">Nepal</option>\n      <option value=\"Netherland Antilles\">Netherland Antilles</option>\n      <option value=\"Netherlands\">Netherlands (Holland, Europe)</option>\n      <option value=\"Nevis\">Nevis</option>\n      <option value=\"New Caledonia\">New Caledonia</option>\n      <option value=\"New Zealand\">New Zealand</option>\n      <option value=\"Nicaragua\">Nicaragua</option>\n      <option value=\"Niger\">Niger</option>\n      <option value=\"Nigeria\">Nigeria</option>\n      <option value=\"Niue\">Niue</option>\n      <option value=\"Norfolk Island\">Norfolk Island</option>\n      <option value=\"Norway\">Norway</option>\n      <option value=\"Oman\">Oman</option>\n      <option value=\"Pakistan\">Pakistan</option>\n      <option value=\"Palau Island\">Palau Island</option>\n      <option value=\"Palestine\">Palestine</option>\n      <option value=\"Panama\">Panama</option>\n      <option value=\"Papua New Guinea\">Papua New Guinea</option>\n      <option value=\"Paraguay\">Paraguay</option>\n      <option value=\"Peru\">Peru</option>\n      <option value=\"Phillipines\">Philippines</option>\n      <option value=\"Pitcairn Island\">Pitcairn Island</option>\n      <option value=\"Poland\">Poland</option>\n      <option value=\"Portugal\">Portugal</option>\n      <option value=\"Puerto Rico\">Puerto Rico</option>\n      <option value=\"Qatar\">Qatar</option>\n      <option value=\"Republic of Montenegro\">Republic of Montenegro</option>\n      <option value=\"Republic of Serbia\">Republic of Serbia</option>\n      <option value=\"Reunion\">Reunion</option>\n      <option value=\"Romania\">Romania</option>\n      <option value=\"Russia\">Russia</option>\n      <option value=\"Rwanda\">Rwanda</option>\n      <option value=\"St Barthelemy\">St Barthelemy</option>\n      <option value=\"St Eustatius\">St Eustatius</option>\n      <option value=\"St Helena\">St Helena</option>\n      <option value=\"St Kitts-Nevis\">St Kitts-Nevis</option>\n      <option value=\"St Lucia\">St Lucia</option>\n      <option value=\"St Maarten\">St Maarten</option>\n      <option value=\"St Pierre &amp; Miquelon\">St Pierre &amp; Miquelon</option>\n      <option value=\"St Vincent &amp; Grenadines\">St Vincent &amp; Grenadines</option>\n      <option value=\"Saipan\">Saipan</option>\n      <option value=\"Samoa\">Samoa</option>\n      <option value=\"Samoa American\">Samoa American</option>\n      <option value=\"San Marino\">San Marino</option>\n      <option value=\"Sao Tome &amp; Principe\">Sao Tome &amp; Principe</option>\n      <option value=\"Saudi Arabia\">Saudi Arabia</option>\n      <option value=\"Senegal\">Senegal</option>\n      <option value=\"Serbia\">Serbia</option>\n      <option value=\"Seychelles\">Seychelles</option>\n      <option value=\"Sierra Leone\">Sierra Leone</option>\n      <option value=\"Singapore\">Singapore</option>\n      <option value=\"Slovakia\">Slovakia</option>\n      <option value=\"Slovenia\">Slovenia</option>\n      <option value=\"Solomon Islands\">Solomon Islands</option>\n      <option value=\"Somalia\">Somalia</option>\n      <option value=\"South Africa\">South Africa</option>\n      <option value=\"Spain\">Spain</option>\n      <option value=\"Sri Lanka\">Sri Lanka</option>\n      <option value=\"Sudan\">Sudan</option>\n      <option value=\"Suriname\">Suriname</option>\n      <option value=\"Swaziland\">Swaziland</option>\n      <option value=\"Sweden\">Sweden</option>\n      <option value=\"Switzerland\">Switzerland</option>\n      <option value=\"Syria\">Syria</option>\n      <option value=\"Tahiti\">Tahiti</option>\n      <option value=\"Taiwan\">Taiwan</option>\n      <option value=\"Tajikistan\">Tajikistan</option>\n      <option value=\"Tanzania\">Tanzania</option>\n      <option value=\"Thailand\">Thailand</option>\n      <option value=\"Togo\">Togo</option>\n      <option value=\"Tokelau\">Tokelau</option>\n      <option value=\"Tonga\">Tonga</option>\n      <option value=\"Trinidad &amp; Tobago\">Trinidad &amp; Tobago</option>\n      <option value=\"Tunisia\">Tunisia</option>\n      <option value=\"Turkey\">Turkey</option>\n      <option value=\"Turkmenistan\">Turkmenistan</option>\n      <option value=\"Turks &amp; Caicos Is\">Turks &amp; Caicos Is</option>\n      <option value=\"Tuvalu\">Tuvalu</option>\n      <option value=\"Uganda\">Uganda</option>\n      <option value=\"Ukraine\">Ukraine</option>\n      <option value=\"United Arab Erimates\">United Arab Emirates</option>\n      <option value=\"United Kingdom\">United Kingdom</option>\n      <option value=\"United States of America\">United States of America</option>\n      <option value=\"Uraguay\">Uruguay</option>\n      <option value=\"Uzbekistan\">Uzbekistan</option>\n      <option value=\"Vanuatu\">Vanuatu</option>\n      <option value=\"Vatican City State\">Vatican City State</option>\n      <option value=\"Venezuela\">Venezuela</option>\n      <option value=\"Vietnam\">Vietnam</option>\n      <option value=\"Virgin Islands (Brit)\">Virgin Islands (Brit)</option>\n      <option value=\"Virgin Islands (USA)\">Virgin Islands (USA)</option>\n      <option value=\"Wake Island\">Wake Island</option>\n      <option value=\"Wallis &amp; Futana Is\">Wallis &amp; Futana Is</option>\n      <option value=\"Yemen\">Yemen</option>\n      <option value=\"Zaire\">Zaire</option>\n      <option value=\"Zambia\">Zambia</option>\n      <option value=\"Zimbabwe\">Zimbabwe</option>\n    </select>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n<p style=\"padding-top:10px\">\n<button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['/profile']\">Back</button>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Tripanion</h1>\n  <p class=\"lead\">Don't have friends to go on a trip with? Don't worry, you'll find some here</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Tripanion</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Trip Search</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n\n    </div><!--/.navbar-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n<!-- Page Container -->\n<!-- <div class=\"w3-content w3-margin-top\" style=\"max-width:1400px;\"> -->\n\n  <!-- The Grid -->\n  <div class=\"w3-row-padding\">\n\n    <!-- Left Column -->\n    <div class=\"w3-third\">\n      <div class=\"w3-white w3-text-grey w3-card-4\">\n        <div class=\"w3-display-container\">\n          <img src=\"../../../assets/images/logo.png\" style=\"width:100%\" alt=\"Avatar\">\n          <div class=\"w3-display-bottomleft w3-container w3-text-black\">\n            <h2 class=\"w3-text-white\">{{user.name}}</h2>\n          </div>\n        </div>\n        <br>\n        <div class=\"w3-container\" style=\"padding-top:10\">\n         <p><i class=\"fa fa-user fa-fw w3-margin-right w3-large w3-text-teal\"></i>Name: <b>{{user.name}}</b></p>\n         <p><i class=\"fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal\"></i>Username: <b>{{user.username}}</b></p>\n         <p class=\"capitalize\"><i class=\"fa fa-globe fa-fw w3-margin-right w3-large w3-text-teal\"></i>Nationality: <b>{{user.nationality}}</b></p>\n         <p class=\"capitalize\"><i class=\"fa fa-home fa-fw w3-margin-right w3-large w3-text-teal\"></i>Country Of Resident: <b>{{user.countryOfResident}}</b></p>\n         <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal\"></i>Email: <b>{{user.email}}</b></p>\n         <hr>\n         <button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['/editProfile']\">Edit You Information</button>\n         <!-- <button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['/tripPage']\">Change you Password</button> -->\n         <p style=\"padding-bottom:10px\">\n       </div>\n     </div>\n     <br>\n<!-- End Left Column -->\n    </div>\n\n    <!-- Right Column -->\n    <div class=\"w3-twothird\">\n      <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n        <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-plane fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Your Upcoming Trip {{currentDate}}</h2>\n\n        <div class=\"w3-container\" *ngFor=\"let trip of upcomingTrips | orderBy : 'date'\">\n          <h5 class=\"w3-opacity\"><b>To {{trip.destination}}</b></h5>\n          <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>{{trip.date | date : \"EEEE, d MMMM, y\" }}</h6>\n          <p>{{trip.description}}</p>\n          <span style=\"display: inline;\">\n            <modal #modal>\n                <modal-header [show-close]=\"true\">\n                    <h2 class=\"modal-title\">{{trip.tripName}}</h2>\n                </modal-header>\n                <modal-body>\n\n                    <div class=\"container\">\n\n                        <div> Destination {{trip.destination}}, Date</div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-8\">\n                                <div class=\"container\">chat</div>\n                            </div>\n                            <div class=\"col-md-4\" >members and host\n                                <div class=\"host\">Host : {{trip.host}}\n                                    <div class=\"members\"> Members :\n                                        <div  *ngFor=\"let member of trip.members; let i = index\">\n                                            <div>\n                                                {{member}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <br />\n                            <div class=\"row\">\n                                <div class=\"col-md-10\">\n                                    <div>Description : {{trip.description}}</div>\n                                </div>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                </modal-body>\n                <modal-footer>\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.close()\">Ok</button>\n                </modal-footer>                </modal>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open('lg')\">View Infomation</button>\n            <p style=\"padding-bottom:10px\">\n          </span>\n          <hr>\n        </div>\n      </div>\n\n      <div class=\"w3-container w3-card-2 w3-white w3-margin-bottom\">\n        <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-check fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Your Past Trip</h2>\n        <div class=\"w3-container\" *ngFor=\"let trip of pastTrips | orderBy : '-date'\">\n          <h5 class=\"w3-opacity\"><b>To {{trip.destination}}</b></h5>\n          <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>{{trip.date | date : \"EEEE, d MMMM, y\"}}</h6>\n          <p>{{trip.description}}</p>\n          <span style=\"display: inline;\">\n            <modal #modal>\n                <modal-header [show-close]=\"true\">\n                    <h2 class=\"modal-title\">{{trip.tripName}}</h2>\n                </modal-header>\n                <modal-body>\n\n                    <div class=\"container\">\n\n                        <div> Destination {{trip.destination}}, Date</div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-8\">\n                                <div class=\"container\">chat</div>\n                            </div>\n                            <div class=\"col-md-4\" >members and host\n                                <div class=\"host\">Host : {{trip.host}}\n                                    <div class=\"members\"> Members :\n                                        <div  *ngFor=\"let member of trip.members; let i = index\">\n                                            <div>\n                                                {{member}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <br />\n                            <div class=\"row\">\n                                <div class=\"col-md-10\">\n                                    <div>Description : {{trip.description}}</div>\n                                </div>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                </modal-body>\n                <modal-footer>\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.close()\">Ok</button>\n                </modal-footer>                </modal>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open('lg')\">View Infomation</button>\n      <p style=\"padding-bottom:10px\">\n      </span>\n          <hr>\n        </div>\n      </div>\n\n    <!-- End Right Column -->\n    </div>\n\n<!-- End Grid -->\n  </div>\n<!-- End Page Container -->\n<!-- </div> -->\n\n</div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Re-type Password</label>\n    <input type=\"password\" [(ngModel)]=\"repassword\" name=\"repassword\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Nationality</label>\n    <select [(ngModel)]=\"nationality\" name=\"nationality\" class=\"form-control\">\n      <option value=\"\">-- Please Choose One --</option>\n      <option value=\"afghan\">Afghan</option>\n      <option value=\"albanian\">Albanian</option>\n      <option value=\"algerian\">Algerian</option>\n      <option value=\"american\">American</option>\n      <option value=\"andorran\">Andorran</option>\n      <option value=\"angolan\">Angolan</option>\n      <option value=\"antiguans\">Antiguans</option>\n      <option value=\"argentinean\">Argentinean</option>\n      <option value=\"armenian\">Armenian</option>\n      <option value=\"australian\">Australian</option>\n      <option value=\"austrian\">Austrian</option>\n      <option value=\"azerbaijani\">Azerbaijani</option>\n      <option value=\"bahamian\">Bahamian</option>\n      <option value=\"bahraini\">Bahraini</option>\n      <option value=\"bangladeshi\">Bangladeshi</option>\n      <option value=\"barbadian\">Barbadian</option>\n      <option value=\"barbudans\">Barbudans</option>\n      <option value=\"batswana\">Batswana</option>\n      <option value=\"belarusian\">Belarusian</option>\n      <option value=\"belgian\">Belgian</option>\n      <option value=\"belizean\">Belizean</option>\n      <option value=\"beninese\">Beninese</option>\n      <option value=\"bhutanese\">Bhutanese</option>\n      <option value=\"bolivian\">Bolivian</option>\n      <option value=\"bosnian\">Bosnian</option>\n      <option value=\"brazilian\">Brazilian</option>\n      <option value=\"british\">British</option>\n      <option value=\"bruneian\">Bruneian</option>\n      <option value=\"bulgarian\">Bulgarian</option>\n      <option value=\"burkinabe\">Burkinabe</option>\n      <option value=\"burmese\">Burmese</option>\n      <option value=\"burundian\">Burundian</option>\n      <option value=\"cambodian\">Cambodian</option>\n      <option value=\"cameroonian\">Cameroonian</option>\n      <option value=\"canadian\">Canadian</option>\n      <option value=\"cape verdean\">Cape Verdean</option>\n      <option value=\"central african\">Central African</option>\n      <option value=\"chadian\">Chadian</option>\n      <option value=\"chilean\">Chilean</option>\n      <option value=\"chinese\">Chinese</option>\n      <option value=\"colombian\">Colombian</option>\n      <option value=\"comoran\">Comoran</option>\n      <option value=\"congolese\">Congolese</option>\n      <option value=\"costa rican\">Costa Rican</option>\n      <option value=\"croatian\">Croatian</option>\n      <option value=\"cuban\">Cuban</option>\n      <option value=\"cypriot\">Cypriot</option>\n      <option value=\"czech\">Czech</option>\n      <option value=\"danish\">Danish</option>\n      <option value=\"djibouti\">Djibouti</option>\n      <option value=\"dominican\">Dominican</option>\n      <option value=\"dutch\">Dutch</option>\n      <option value=\"east timorese\">East Timorese</option>\n      <option value=\"ecuadorean\">Ecuadorean</option>\n      <option value=\"egyptian\">Egyptian</option>\n      <option value=\"emirian\">Emirian</option>\n      <option value=\"equatorial guinean\">Equatorial Guinean</option>\n      <option value=\"eritrean\">Eritrean</option>\n      <option value=\"estonian\">Estonian</option>\n      <option value=\"ethiopian\">Ethiopian</option>\n      <option value=\"fijian\">Fijian</option>\n      <option value=\"filipino\">Filipino</option>\n      <option value=\"finnish\">Finnish</option>\n      <option value=\"french\">French</option>\n      <option value=\"gabonese\">Gabonese</option>\n      <option value=\"gambian\">Gambian</option>\n      <option value=\"georgian\">Georgian</option>\n      <option value=\"german\">German</option>\n      <option value=\"ghanaian\">Ghanaian</option>\n      <option value=\"greek\">Greek</option>\n      <option value=\"grenadian\">Grenadian</option>\n      <option value=\"guatemalan\">Guatemalan</option>\n      <option value=\"guinea-bissauan\">Guinea-Bissauan</option>\n      <option value=\"guinean\">Guinean</option>\n      <option value=\"guyanese\">Guyanese</option>\n      <option value=\"haitian\">Haitian</option>\n      <option value=\"herzegovinian\">Herzegovinian</option>\n      <option value=\"honduran\">Honduran</option>\n      <option value=\"hungarian\">Hungarian</option>\n      <option value=\"icelander\">Icelander</option>\n      <option value=\"indian\">Indian</option>\n      <option value=\"indonesian\">Indonesian</option>\n      <option value=\"iranian\">Iranian</option>\n      <option value=\"iraqi\">Iraqi</option>\n      <option value=\"irish\">Irish</option>\n      <option value=\"israeli\">Israeli</option>\n      <option value=\"italian\">Italian</option>\n      <option value=\"ivorian\">Ivorian</option>\n      <option value=\"jamaican\">Jamaican</option>\n      <option value=\"japanese\">Japanese</option>\n      <option value=\"jordanian\">Jordanian</option>\n      <option value=\"kazakhstani\">Kazakhstani</option>\n      <option value=\"kenyan\">Kenyan</option>\n      <option value=\"kittian and nevisian\">Kittian and Nevisian</option>\n      <option value=\"kuwaiti\">Kuwaiti</option>\n      <option value=\"kyrgyz\">Kyrgyz</option>\n      <option value=\"laotian\">Laotian</option>\n      <option value=\"latvian\">Latvian</option>\n      <option value=\"lebanese\">Lebanese</option>\n      <option value=\"liberian\">Liberian</option>\n      <option value=\"libyan\">Libyan</option>\n      <option value=\"liechtensteiner\">Liechtensteiner</option>\n      <option value=\"lithuanian\">Lithuanian</option>\n      <option value=\"luxembourger\">Luxembourger</option>\n      <option value=\"macedonian\">Macedonian</option>\n      <option value=\"malagasy\">Malagasy</option>\n      <option value=\"malawian\">Malawian</option>\n      <option value=\"malaysian\">Malaysian</option>\n      <option value=\"maldivan\">Maldivan</option>\n      <option value=\"malian\">Malian</option>\n      <option value=\"maltese\">Maltese</option>\n      <option value=\"marshallese\">Marshallese</option>\n      <option value=\"mauritanian\">Mauritanian</option>\n      <option value=\"mauritian\">Mauritian</option>\n      <option value=\"mexican\">Mexican</option>\n      <option value=\"micronesian\">Micronesian</option>\n      <option value=\"moldovan\">Moldovan</option>\n      <option value=\"monacan\">Monacan</option>\n      <option value=\"mongolian\">Mongolian</option>\n      <option value=\"moroccan\">Moroccan</option>\n      <option value=\"mosotho\">Mosotho</option>\n      <option value=\"motswana\">Motswana</option>\n      <option value=\"mozambican\">Mozambican</option>\n      <option value=\"namibian\">Namibian</option>\n      <option value=\"nauruan\">Nauruan</option>\n      <option value=\"nepalese\">Nepalese</option>\n      <option value=\"new zealander\">New Zealander</option>\n      <option value=\"ni-vanuatu\">Ni-Vanuatu</option>\n      <option value=\"nicaraguan\">Nicaraguan</option>\n      <option value=\"nigerien\">Nigerien</option>\n      <option value=\"north korean\">North Korean</option>\n      <option value=\"northern irish\">Northern Irish</option>\n      <option value=\"norwegian\">Norwegian</option>\n      <option value=\"omani\">Omani</option>\n      <option value=\"pakistani\">Pakistani</option>\n      <option value=\"palauan\">Palauan</option>\n      <option value=\"panamanian\">Panamanian</option>\n      <option value=\"papua new guinean\">Papua New Guinean</option>\n      <option value=\"paraguayan\">Paraguayan</option>\n      <option value=\"peruvian\">Peruvian</option>\n      <option value=\"polish\">Polish</option>\n      <option value=\"portuguese\">Portuguese</option>\n      <option value=\"qatari\">Qatari</option>\n      <option value=\"romanian\">Romanian</option>\n      <option value=\"russian\">Russian</option>\n      <option value=\"rwandan\">Rwandan</option>\n      <option value=\"saint lucian\">Saint Lucian</option>\n      <option value=\"salvadoran\">Salvadoran</option>\n      <option value=\"samoan\">Samoan</option>\n      <option value=\"san marinese\">San Marinese</option>\n      <option value=\"sao tomean\">Sao Tomean</option>\n      <option value=\"saudi\">Saudi</option>\n      <option value=\"scottish\">Scottish</option>\n      <option value=\"senegalese\">Senegalese</option>\n      <option value=\"serbian\">Serbian</option>\n      <option value=\"seychellois\">Seychellois</option>\n      <option value=\"sierra leonean\">Sierra Leonean</option>\n      <option value=\"singaporean\">Singaporean</option>\n      <option value=\"slovakian\">Slovakian</option>\n      <option value=\"slovenian\">Slovenian</option>\n      <option value=\"solomon islander\">Solomon Islander</option>\n      <option value=\"somali\">Somali</option>\n      <option value=\"south african\">South African</option>\n      <option value=\"south korean\">South Korean</option>\n      <option value=\"spanish\">Spanish</option>\n      <option value=\"sri lankan\">Sri Lankan</option>\n      <option value=\"sudanese\">Sudanese</option>\n      <option value=\"surinamer\">Surinamer</option>\n      <option value=\"swazi\">Swazi</option>\n      <option value=\"swedish\">Swedish</option>\n      <option value=\"swiss\">Swiss</option>\n      <option value=\"syrian\">Syrian</option>\n      <option value=\"taiwanese\">Taiwanese</option>\n      <option value=\"tajik\">Tajik</option>\n      <option value=\"tanzanian\">Tanzanian</option>\n      <option value=\"thai\">Thai</option>\n      <option value=\"togolese\">Togolese</option>\n      <option value=\"tongan\">Tongan</option>\n      <option value=\"trinidadian or tobagonian\">Trinidadian or Tobagonian</option>\n      <option value=\"tunisian\">Tunisian</option>\n      <option value=\"turkish\">Turkish</option>\n      <option value=\"tuvaluan\">Tuvaluan</option>\n      <option value=\"ugandan\">Ugandan</option>\n      <option value=\"ukrainian\">Ukrainian</option>\n      <option value=\"uruguayan\">Uruguayan</option>\n      <option value=\"uzbekistani\">Uzbekistani</option>\n      <option value=\"venezuelan\">Venezuelan</option>\n      <option value=\"vietnamese\">Vietnamese</option>\n      <option value=\"welsh\">Welsh</option>\n      <option value=\"yemenite\">Yemenite</option>\n      <option value=\"zambian\">Zambian</option>\n      <option value=\"zimbabwean\">Zimbabwean</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Country of Resident</label>\n    <select [(ngModel)]=\"countryOfResident\" name=\"countryOfResident\" class=\"form-control\">\n      <option value=\"\">-- Please Choose One --</option>\n      <option value=\"Afganistan\">Afghanistan</option>\n      <option value=\"Albania\">Albania</option>\n      <option value=\"Algeria\">Algeria</option>\n      <option value=\"American Samoa\">American Samoa</option>\n      <option value=\"Andorra\">Andorra</option>\n      <option value=\"Angola\">Angola</option>\n      <option value=\"Anguilla\">Anguilla</option>\n      <option value=\"Antigua &amp; Barbuda\">Antigua &amp; Barbuda</option>\n      <option value=\"Argentina\">Argentina</option>\n      <option value=\"Armenia\">Armenia</option>\n      <option value=\"Aruba\">Aruba</option>\n      <option value=\"Australia\">Australia</option>\n      <option value=\"Austria\">Austria</option>\n      <option value=\"Azerbaijan\">Azerbaijan</option>\n      <option value=\"Bahamas\">Bahamas</option>\n      <option value=\"Bahrain\">Bahrain</option>\n      <option value=\"Bangladesh\">Bangladesh</option>\n      <option value=\"Barbados\">Barbados</option>\n      <option value=\"Belarus\">Belarus</option>\n      <option value=\"Belgium\">Belgium</option>\n      <option value=\"Belize\">Belize</option>\n      <option value=\"Benin\">Benin</option>\n      <option value=\"Bermuda\">Bermuda</option>\n      <option value=\"Bhutan\">Bhutan</option>\n      <option value=\"Bolivia\">Bolivia</option>\n      <option value=\"Bonaire\">Bonaire</option>\n      <option value=\"Bosnia &amp; Herzegovina\">Bosnia &amp; Herzegovina</option>\n      <option value=\"Botswana\">Botswana</option>\n      <option value=\"Brazil\">Brazil</option>\n      <option value=\"British Indian Ocean Ter\">British Indian Ocean Ter</option>\n      <option value=\"Brunei\">Brunei</option>\n      <option value=\"Bulgaria\">Bulgaria</option>\n      <option value=\"Burkina Faso\">Burkina Faso</option>\n      <option value=\"Burundi\">Burundi</option>\n      <option value=\"Cambodia\">Cambodia</option>\n      <option value=\"Cameroon\">Cameroon</option>\n      <option value=\"Canada\">Canada</option>\n      <option value=\"Canary Islands\">Canary Islands</option>\n      <option value=\"Cape Verde\">Cape Verde</option>\n      <option value=\"Cayman Islands\">Cayman Islands</option>\n      <option value=\"Central African Republic\">Central African Republic</option>\n      <option value=\"Chad\">Chad</option>\n      <option value=\"Channel Islands\">Channel Islands</option>\n      <option value=\"Chile\">Chile</option>\n      <option value=\"China\">China</option>\n      <option value=\"Christmas Island\">Christmas Island</option>\n      <option value=\"Cocos Island\">Cocos Island</option>\n      <option value=\"Colombia\">Colombia</option>\n      <option value=\"Comoros\">Comoros</option>\n      <option value=\"Congo\">Congo</option>\n      <option value=\"Cook Islands\">Cook Islands</option>\n      <option value=\"Costa Rica\">Costa Rica</option>\n      <option value=\"Cote DIvoire\">Cote D'Ivoire</option>\n      <option value=\"Croatia\">Croatia</option>\n      <option value=\"Cuba\">Cuba</option>\n      <option value=\"Curaco\">Curacao</option>\n      <option value=\"Cyprus\">Cyprus</option>\n      <option value=\"Czech Republic\">Czech Republic</option>\n      <option value=\"Denmark\">Denmark</option>\n      <option value=\"Djibouti\">Djibouti</option>\n      <option value=\"Dominica\">Dominica</option>\n      <option value=\"Dominican Republic\">Dominican Republic</option>\n      <option value=\"East Timor\">East Timor</option>\n      <option value=\"Ecuador\">Ecuador</option>\n      <option value=\"Egypt\">Egypt</option>\n      <option value=\"El Salvador\">El Salvador</option>\n      <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n      <option value=\"Eritrea\">Eritrea</option>\n      <option value=\"Estonia\">Estonia</option>\n      <option value=\"Ethiopia\">Ethiopia</option>\n      <option value=\"Falkland Islands\">Falkland Islands</option>\n      <option value=\"Faroe Islands\">Faroe Islands</option>\n      <option value=\"Fiji\">Fiji</option>\n      <option value=\"Finland\">Finland</option>\n      <option value=\"France\">France</option>\n      <option value=\"French Guiana\">French Guiana</option>\n      <option value=\"French Polynesia\">French Polynesia</option>\n      <option value=\"French Southern Ter\">French Southern Ter</option>\n      <option value=\"Gabon\">Gabon</option>\n      <option value=\"Gambia\">Gambia</option>\n      <option value=\"Georgia\">Georgia</option>\n      <option value=\"Germany\">Germany</option>\n      <option value=\"Ghana\">Ghana</option>\n      <option value=\"Gibraltar\">Gibraltar</option>\n      <option value=\"Great Britain\">Great Britain</option>\n      <option value=\"Greece\">Greece</option>\n      <option value=\"Greenland\">Greenland</option>\n      <option value=\"Grenada\">Grenada</option>\n      <option value=\"Guadeloupe\">Guadeloupe</option>\n      <option value=\"Guam\">Guam</option>\n      <option value=\"Guatemala\">Guatemala</option>\n      <option value=\"Guinea\">Guinea</option>\n      <option value=\"Guyana\">Guyana</option>\n      <option value=\"Haiti\">Haiti</option>\n      <option value=\"Hawaii\">Hawaii</option>\n      <option value=\"Honduras\">Honduras</option>\n      <option value=\"Hong Kong\">Hong Kong</option>\n      <option value=\"Hungary\">Hungary</option>\n      <option value=\"Iceland\">Iceland</option>\n      <option value=\"India\">India</option>\n      <option value=\"Indonesia\">Indonesia</option>\n      <option value=\"Iran\">Iran</option>\n      <option value=\"Iraq\">Iraq</option>\n      <option value=\"Ireland\">Ireland</option>\n      <option value=\"Isle of Man\">Isle of Man</option>\n      <option value=\"Israel\">Israel</option>\n      <option value=\"Italy\">Italy</option>\n      <option value=\"Jamaica\">Jamaica</option>\n      <option value=\"Japan\">Japan</option>\n      <option value=\"Jordan\">Jordan</option>\n      <option value=\"Kazakhstan\">Kazakhstan</option>\n      <option value=\"Kenya\">Kenya</option>\n      <option value=\"Kiribati\">Kiribati</option>\n      <option value=\"Korea North\">Korea North</option>\n      <option value=\"Korea Sout\">Korea South</option>\n      <option value=\"Kuwait\">Kuwait</option>\n      <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n      <option value=\"Laos\">Laos</option>\n      <option value=\"Latvia\">Latvia</option>\n      <option value=\"Lebanon\">Lebanon</option>\n      <option value=\"Lesotho\">Lesotho</option>\n      <option value=\"Liberia\">Liberia</option>\n      <option value=\"Libya\">Libya</option>\n      <option value=\"Liechtenstein\">Liechtenstein</option>\n      <option value=\"Lithuania\">Lithuania</option>\n      <option value=\"Luxembourg\">Luxembourg</option>\n      <option value=\"Macau\">Macau</option>\n      <option value=\"Macedonia\">Macedonia</option>\n      <option value=\"Madagascar\">Madagascar</option>\n      <option value=\"Malaysia\">Malaysia</option>\n      <option value=\"Malawi\">Malawi</option>\n      <option value=\"Maldives\">Maldives</option>\n      <option value=\"Mali\">Mali</option>\n      <option value=\"Malta\">Malta</option>\n      <option value=\"Marshall Islands\">Marshall Islands</option>\n      <option value=\"Martinique\">Martinique</option>\n      <option value=\"Mauritania\">Mauritania</option>\n      <option value=\"Mauritius\">Mauritius</option>\n      <option value=\"Mayotte\">Mayotte</option>\n      <option value=\"Mexico\">Mexico</option>\n      <option value=\"Midway Islands\">Midway Islands</option>\n      <option value=\"Moldova\">Moldova</option>\n      <option value=\"Monaco\">Monaco</option>\n      <option value=\"Mongolia\">Mongolia</option>\n      <option value=\"Montserrat\">Montserrat</option>\n      <option value=\"Morocco\">Morocco</option>\n      <option value=\"Mozambique\">Mozambique</option>\n      <option value=\"Myanmar\">Myanmar</option>\n      <option value=\"Nambia\">Nambia</option>\n      <option value=\"Nauru\">Nauru</option>\n      <option value=\"Nepal\">Nepal</option>\n      <option value=\"Netherland Antilles\">Netherland Antilles</option>\n      <option value=\"Netherlands\">Netherlands (Holland, Europe)</option>\n      <option value=\"Nevis\">Nevis</option>\n      <option value=\"New Caledonia\">New Caledonia</option>\n      <option value=\"New Zealand\">New Zealand</option>\n      <option value=\"Nicaragua\">Nicaragua</option>\n      <option value=\"Niger\">Niger</option>\n      <option value=\"Nigeria\">Nigeria</option>\n      <option value=\"Niue\">Niue</option>\n      <option value=\"Norfolk Island\">Norfolk Island</option>\n      <option value=\"Norway\">Norway</option>\n      <option value=\"Oman\">Oman</option>\n      <option value=\"Pakistan\">Pakistan</option>\n      <option value=\"Palau Island\">Palau Island</option>\n      <option value=\"Palestine\">Palestine</option>\n      <option value=\"Panama\">Panama</option>\n      <option value=\"Papua New Guinea\">Papua New Guinea</option>\n      <option value=\"Paraguay\">Paraguay</option>\n      <option value=\"Peru\">Peru</option>\n      <option value=\"Phillipines\">Philippines</option>\n      <option value=\"Pitcairn Island\">Pitcairn Island</option>\n      <option value=\"Poland\">Poland</option>\n      <option value=\"Portugal\">Portugal</option>\n      <option value=\"Puerto Rico\">Puerto Rico</option>\n      <option value=\"Qatar\">Qatar</option>\n      <option value=\"Republic of Montenegro\">Republic of Montenegro</option>\n      <option value=\"Republic of Serbia\">Republic of Serbia</option>\n      <option value=\"Reunion\">Reunion</option>\n      <option value=\"Romania\">Romania</option>\n      <option value=\"Russia\">Russia</option>\n      <option value=\"Rwanda\">Rwanda</option>\n      <option value=\"St Barthelemy\">St Barthelemy</option>\n      <option value=\"St Eustatius\">St Eustatius</option>\n      <option value=\"St Helena\">St Helena</option>\n      <option value=\"St Kitts-Nevis\">St Kitts-Nevis</option>\n      <option value=\"St Lucia\">St Lucia</option>\n      <option value=\"St Maarten\">St Maarten</option>\n      <option value=\"St Pierre &amp; Miquelon\">St Pierre &amp; Miquelon</option>\n      <option value=\"St Vincent &amp; Grenadines\">St Vincent &amp; Grenadines</option>\n      <option value=\"Saipan\">Saipan</option>\n      <option value=\"Samoa\">Samoa</option>\n      <option value=\"Samoa American\">Samoa American</option>\n      <option value=\"San Marino\">San Marino</option>\n      <option value=\"Sao Tome &amp; Principe\">Sao Tome &amp; Principe</option>\n      <option value=\"Saudi Arabia\">Saudi Arabia</option>\n      <option value=\"Senegal\">Senegal</option>\n      <option value=\"Serbia\">Serbia</option>\n      <option value=\"Seychelles\">Seychelles</option>\n      <option value=\"Sierra Leone\">Sierra Leone</option>\n      <option value=\"Singapore\">Singapore</option>\n      <option value=\"Slovakia\">Slovakia</option>\n      <option value=\"Slovenia\">Slovenia</option>\n      <option value=\"Solomon Islands\">Solomon Islands</option>\n      <option value=\"Somalia\">Somalia</option>\n      <option value=\"South Africa\">South Africa</option>\n      <option value=\"Spain\">Spain</option>\n      <option value=\"Sri Lanka\">Sri Lanka</option>\n      <option value=\"Sudan\">Sudan</option>\n      <option value=\"Suriname\">Suriname</option>\n      <option value=\"Swaziland\">Swaziland</option>\n      <option value=\"Sweden\">Sweden</option>\n      <option value=\"Switzerland\">Switzerland</option>\n      <option value=\"Syria\">Syria</option>\n      <option value=\"Tahiti\">Tahiti</option>\n      <option value=\"Taiwan\">Taiwan</option>\n      <option value=\"Tajikistan\">Tajikistan</option>\n      <option value=\"Tanzania\">Tanzania</option>\n      <option value=\"Thailand\">Thailand</option>\n      <option value=\"Togo\">Togo</option>\n      <option value=\"Tokelau\">Tokelau</option>\n      <option value=\"Tonga\">Tonga</option>\n      <option value=\"Trinidad &amp; Tobago\">Trinidad &amp; Tobago</option>\n      <option value=\"Tunisia\">Tunisia</option>\n      <option value=\"Turkey\">Turkey</option>\n      <option value=\"Turkmenistan\">Turkmenistan</option>\n      <option value=\"Turks &amp; Caicos Is\">Turks &amp; Caicos Is</option>\n      <option value=\"Tuvalu\">Tuvalu</option>\n      <option value=\"Uganda\">Uganda</option>\n      <option value=\"Ukraine\">Ukraine</option>\n      <option value=\"United Arab Erimates\">United Arab Emirates</option>\n      <option value=\"United Kingdom\">United Kingdom</option>\n      <option value=\"United States of America\">United States of America</option>\n      <option value=\"Uraguay\">Uruguay</option>\n      <option value=\"Uzbekistan\">Uzbekistan</option>\n      <option value=\"Vanuatu\">Vanuatu</option>\n      <option value=\"Vatican City State\">Vatican City State</option>\n      <option value=\"Venezuela\">Venezuela</option>\n      <option value=\"Vietnam\">Vietnam</option>\n      <option value=\"Virgin Islands (Brit)\">Virgin Islands (Brit)</option>\n      <option value=\"Virgin Islands (USA)\">Virgin Islands (USA)</option>\n      <option value=\"Wake Island\">Wake Island</option>\n      <option value=\"Wallis &amp; Futana Is\">Wallis &amp; Futana Is</option>\n      <option value=\"Yemen\">Yemen</option>\n      <option value=\"Zaire\">Zaire</option>\n      <option value=\"Zambia\">Zambia</option>\n      <option value=\"Zimbabwe\">Zimbabwe</option>\n    </select>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Name of a Trip</h2>\n\n\n<div class=\"container\">\n\n  <div> Destination {{trip.destination}}, Date</div>\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"container\">chat</div>\n    </div>\n    <div class=\"col-md-4\" >members and host\n      <div class=\"host\">Host\n      <div class=\"members\"> Members\n        <div  *ngFor=\"let member of trip.members; let i = index\">\n          <div>\n            {{member}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br />\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <div>Description</div>\n    </div>\n\n    <div class=\"col-md-2\">\n      <div class=\"joinButton\">\n        <button type=\"button\" class=\"btn btn-default\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] (click)=\"searchTrips()\">Join</button>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[732]);
//# sourceMappingURL=main.bundle.map