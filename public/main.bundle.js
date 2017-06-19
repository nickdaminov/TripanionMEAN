webpackJsonp([1,4],{

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(374);
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
    TripService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], TripService);
    return TripService;
    var _a;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/trip.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(222);
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
    function DashboardComponent(tripService, router) {
        var _this = this;
        this.tripService = tripService;
        this.router = router;
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
        /* this.tripService.getTrips().subscribe(trips => {
         this.trips = trips.trips;
         },
         err => {
         console.log(err);
         return false;
         });;*/
    };
    DashboardComponent.prototype.joinTrip = function () {
    };
    DashboardComponent.prototype.searchTrips = function () {
        var _this = this;
        if (this.destination.valueOf() === "All Destination") {
            console.log("All Destination");
            this.tripService.getTrips().subscribe(function (trips) {
                //  this.trips = trips.trips;
                //},
                //err => {
                _this.trips = trips;
                //return false;
            });
        }
        else {
            console.log(this.destination);
            this.tripService.getTripsByDestination(this.destination).subscribe(function (trips) {
                _this.trips = trips;
            });
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(691),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 335:
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

/***/ 391:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/main.js.map

/***/ }),

/***/ 509:
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
            template: __webpack_require__(689),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_trip_page_trip_page_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_edit_profile_edit_profile_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_create_trip_create_trip_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_trip_service__ = __webpack_require__(222);
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
                __WEBPACK_IMPORTED_MODULE_12__components_trip_page_trip_page_component__["a" /* TripPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(334);
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
    function CreateTripComponent(tripService, flashMessage, router, dashboard) {
        this.tripService = tripService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.dashboard = dashboard;
    }
    CreateTripComponent.prototype.ngOnInit = function () {
    };
    CreateTripComponent.prototype.onCreationSubmit = function () {
        var _this = this;
        var trip = {
            destination: this.destination,
            date: this.date,
            tripName: this.tripName,
            description: this.description
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
            template: __webpack_require__(690),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]) === 'function' && _d) || Object])
    ], CreateTripComponent);
    return CreateTripComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/create-trip.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function EditProfileComponent() {
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(692),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/edit-profile.component.js.map

/***/ }),

/***/ 513:
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
            template: __webpack_require__(693),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(108);
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
            template: __webpack_require__(694),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/login.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(108);
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
            template: __webpack_require__(695),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
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
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(696),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/profile.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
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
            template: __webpack_require__(697),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/register.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function TripPageComponent() {
        this.trip = {
            destination: "Paris",
            likes: 12,
            description: "Lots of FUn",
            going: 12
        };
    }
    TripPageComponent.prototype.likes = function () {
        this.trip.likes = this.trip.likes + 1;
    };
    TripPageComponent.prototype.ngOnInit = function () {
    };
    TripPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trip-page',
            template: __webpack_require__(698),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], TripPageComponent);
    return TripPageComponent;
}());
//# sourceMappingURL=/Users/zuyvu/TripanionMEAN/angular-src/src/trip-page.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
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

/***/ 520:
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

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ".trip {\n\n  width:300px;\n  hieght:400px;\n  background-color: #d1f2eb;\n  display: inline-block;\n  border-radius: 5px;\n  margin: 5px;\n\n}\n\n\n\n.rating {\n  background-color:  #5dade2 ;\n  border-radius: 50%;\n  text-align: center;\n\n  font-family: cursive;\n  height: 50px;\n  width: 50px;\n  float: right;\n}\n\n.buttonHolder{\n  text-align: center;\n}\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n    color: lightseagreen;\n}"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ".navbar{\n    background-color: #44edc0;\n}"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ".joinButton{\n  float:right;\n}\n\n.host{\n  background-color: hotpink;\n}\n\n.members{\n  background-color: mediumspringgreen;\n}\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Please enter trip details</h2>\n<form (submit)=\"onCreationSubmit()\">\n    <div class=\"form-group\">\n        <label>Destination</label><br>\n            <select [(ngModel)]=\"destination\" name=\"destination\" class=\"form-control\">\n                <option value=\"Austria\">Austria</option>\n                <option value=\"Italy\">Italy</option>\n                <option value=\"Belgium\">Belgium</option>\n                <option value=\"Latvia\">Latvia</option>\n                <option value=\"Bulgaria\">Bulgaria</option>\n                <option value=\"Lithuania\">Lithuania</option>\n                <option value=\"Croatia\">Croatia</option>\n                <option value=\"Luxembourg\">Luxembourg</option>\n                <option value=\"Cyprus\">Cyprus</option>\n                <option value=\"Malta\">Malta</option>\n                <option value=\"Czech Republic\">Czech Republic</option>\n                <option value=\"Netherlands\">Netherlands</option>\n                <option value=\"Denmark\">Denmark</option>\n                <option value=\"Poland\">Poland</option>\n                <option value=\"Estonia\">Estonia</option>\n                <option value=\"Portugal\">Portugal</option>\n                <option value=\"Finland\">Finland</option>\n                <option value=\"Romania\">Romania</option>\n                <option value=\"France\">France</option>\n                <option value=\"Slovakia\">Slovakia</option>\n                <option value=\"Germany\">Germany</option>\n                <option value=\"Slovenia\">Slovenia</option>\n                <option value=\"Greece\">Greece</option>\n                <option value=\"Spain\">Spain</option>\n                <option value=\"Hungary\">Hungary</option>\n                <option value=\"Sweden\">Sweden</option>\n                <option value=\"Ireland\">Ireland</option>\n                <option value=\"United Kingdom\">United Kingdom</option>\n            </select>\n    </div>\n\n    <div class=\"form-group\">\n    <label>Trip date (in the format of dd/mm/yyyy)</label><br>\n    <input type=\"date\" [(ngModel)]=\"date\" name=\"date\" class=\"form-control\" >\n</div>\n\n    <!-- Host username is added -->\n    <!-- Members will be added later (as usernames as well) -->\n\n    <div class=\"form-group\">\n    <label>Trip name</label><br>\n    <input type=\"text\" [(ngModel)]=\"tripName\" name=\"tripName\" class=\"form-control\" >\n</div>\n\n    <div class=\"form-group\">\n    <label>Destination city and trip description</label><br>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" >\n</div>\n\n    <input type=\"submit\" class=\"btn btn-default\" value=\"Create\">\n</form>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Trip Room</h2>\n<form (submit)=\"searchTrips()\">\n    <div class=\"form-group\">\n        <label>Destination</label><br>\n        <select [(ngModel)]=\"destination\" name=\"destination\" class=\"form-control\">\n            <option value=\"All Destination\">All Destination</option>\n            <option value=\"Austria\">Austria</option>\n            <option value=\"Italy\">Italy</option>\n            <option value=\"Belgium\">Belgium</option>\n            <option value=\"Latvia\">Latvia</option>\n            <option value=\"Bulgaria\">Bulgaria</option>\n            <option value=\"Lithuania\">Lithuania</option>\n            <option value=\"Croatia\">Croatia</option>\n            <option value=\"Luxembourg\">Luxembourg</option>\n            <option value=\"Cyprus\">Cyprus</option>\n            <option value=\"Malta\">Malta</option>\n            <option value=\"Czech Republic\">Czech Republic</option>\n            <option value=\"Netherlands\">Netherlands</option>\n            <option value=\"Denmark\">Denmark</option>\n            <option value=\"Poland\">Poland</option>\n            <option value=\"Estonia\">Estonia</option>\n            <option value=\"Portugal\">Portugal</option>\n            <option value=\"Finland\">Finland</option>\n            <option value=\"Romania\">Romania</option>\n            <option value=\"France\">France</option>\n            <option value=\"Slovakia\">Slovakia</option>\n            <option value=\"Germany\">Germany</option>\n            <option value=\"Slovenia\">Slovenia</option>\n            <option value=\"Greece\">Greece</option>\n            <option value=\"Spain\">Spain</option>\n            <option value=\"Hungary\">Hungary</option>\n            <option value=\"Sweden\">Sweden</option>\n            <option value=\"Ireland\">Ireland</option>\n            <option value=\"United Kingdom\">United Kingdom</option>\n        </select>\n\n        <div class=\"buttonHolder\">\n        <button type=\"button\" class=\"btn btn-default\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] (click)=\"searchTrips()\">Search</button>\n        <button type=\"button\" class=\"btn btn-default\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] [routerLink]=\"['/createTrip']\">Create Trip</button>\n        </div>\n    </div>\n</form>\n\n<div class=\"trips\">\n    <div class=\"trip\" *ngFor=\"let trip of trips; let i = index\">\n        <h6>Destination: </h6>\n        <p>{{trip.destination}}</p>\n        <h6>Date: </h6>\n        <p>{{trip.date}} </p>\n        <h6>Trip Name: </h6>\n        <p>{{trip.tripName}} </p>\n        <h6>Description: </h6>\n        <p>{{trip.description}} </p>\n        <span style=\"display: inline;\">\n        <button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['/tripPage']\">View Infomation</button>\n        <button type=\"button\" class=\"btn btn-default\" onclick=\"joinTrip()\">Join Trip</button>\n        </span>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-profile works!\n</p>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Tripanion</h1>\n  <p class=\"lead\">Don't have friends to go on a trip with? Don't worry, you'll find some here</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Tripanion</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Trip Search</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n\n    </div><!--/.navbar-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n    <li class=\"list-group-item\">Nationality: {{user.nationality}}</li>\n  </ul>\n</div>\n\n<div *ngIf=\"user\">\n<!-- Page Container -->\n<!-- <div class=\"w3-content w3-margin-top\" style=\"max-width:1400px;\"> -->\n\n  <!-- The Grid -->\n  <!-- <div class=\"w3-row-padding\"> -->\n\n    <!-- Left Column -->\n    <div class=\"w3-third\">\n      <div class=\"w3-white w3-text-grey w3-card-4\">\n        <div class=\"w3-display-container\">\n          <img src=\"../../../assets/images/logo.png\" style=\"width:100%\" alt=\"Avatar\">\n          <div class=\"w3-display-bottomleft w3-container w3-text-black\">\n            <h2>Jane Doe</h2>\n          </div>\n        </div>\n        <div class=\"w3-container\">\n         <p><i class=\"fa fa-briefcase fa-fw w3-margin-right w3-large \"></i>Username: {{user.username}}</p>\n         <p><i class=\"fa fa-home fa-fw w3-margin-right w3-large w3-text-teal\"></i>Email: {{user.email}}</p>\n         <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal\"></i>Nationality: {{user.nationality}}</p>\n         <hr>\n       </div>\n     </div>\n     <br>\n<!-- End Left Column -->\n    </div>\n<!-- End Grid -->\n  <!-- </div> -->\n<!-- End Page Container -->\n<!-- </div> -->\n\n</div>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Re-type Password</label>\n    <input type=\"password\" [(ngModel)]=\"repassword\" name=\"repassword\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Nationality</label>\n    <select [(ngModel)]=\"nationality\" name=\"nationality\" class=\"form-control\">\n      <option value=\"\">-- Please Choose One --</option>\n      <option value=\"afghan\">Afghan</option>\n      <option value=\"albanian\">Albanian</option>\n      <option value=\"algerian\">Algerian</option>\n      <option value=\"american\">American</option>\n      <option value=\"andorran\">Andorran</option>\n      <option value=\"angolan\">Angolan</option>\n      <option value=\"antiguans\">Antiguans</option>\n      <option value=\"argentinean\">Argentinean</option>\n      <option value=\"armenian\">Armenian</option>\n      <option value=\"australian\">Australian</option>\n      <option value=\"austrian\">Austrian</option>\n      <option value=\"azerbaijani\">Azerbaijani</option>\n      <option value=\"bahamian\">Bahamian</option>\n      <option value=\"bahraini\">Bahraini</option>\n      <option value=\"bangladeshi\">Bangladeshi</option>\n      <option value=\"barbadian\">Barbadian</option>\n      <option value=\"barbudans\">Barbudans</option>\n      <option value=\"batswana\">Batswana</option>\n      <option value=\"belarusian\">Belarusian</option>\n      <option value=\"belgian\">Belgian</option>\n      <option value=\"belizean\">Belizean</option>\n      <option value=\"beninese\">Beninese</option>\n      <option value=\"bhutanese\">Bhutanese</option>\n      <option value=\"bolivian\">Bolivian</option>\n      <option value=\"bosnian\">Bosnian</option>\n      <option value=\"brazilian\">Brazilian</option>\n      <option value=\"british\">British</option>\n      <option value=\"bruneian\">Bruneian</option>\n      <option value=\"bulgarian\">Bulgarian</option>\n      <option value=\"burkinabe\">Burkinabe</option>\n      <option value=\"burmese\">Burmese</option>\n      <option value=\"burundian\">Burundian</option>\n      <option value=\"cambodian\">Cambodian</option>\n      <option value=\"cameroonian\">Cameroonian</option>\n      <option value=\"canadian\">Canadian</option>\n      <option value=\"cape verdean\">Cape Verdean</option>\n      <option value=\"central african\">Central African</option>\n      <option value=\"chadian\">Chadian</option>\n      <option value=\"chilean\">Chilean</option>\n      <option value=\"chinese\">Chinese</option>\n      <option value=\"colombian\">Colombian</option>\n      <option value=\"comoran\">Comoran</option>\n      <option value=\"congolese\">Congolese</option>\n      <option value=\"costa rican\">Costa Rican</option>\n      <option value=\"croatian\">Croatian</option>\n      <option value=\"cuban\">Cuban</option>\n      <option value=\"cypriot\">Cypriot</option>\n      <option value=\"czech\">Czech</option>\n      <option value=\"danish\">Danish</option>\n      <option value=\"djibouti\">Djibouti</option>\n      <option value=\"dominican\">Dominican</option>\n      <option value=\"dutch\">Dutch</option>\n      <option value=\"east timorese\">East Timorese</option>\n      <option value=\"ecuadorean\">Ecuadorean</option>\n      <option value=\"egyptian\">Egyptian</option>\n      <option value=\"emirian\">Emirian</option>\n      <option value=\"equatorial guinean\">Equatorial Guinean</option>\n      <option value=\"eritrean\">Eritrean</option>\n      <option value=\"estonian\">Estonian</option>\n      <option value=\"ethiopian\">Ethiopian</option>\n      <option value=\"fijian\">Fijian</option>\n      <option value=\"filipino\">Filipino</option>\n      <option value=\"finnish\">Finnish</option>\n      <option value=\"french\">French</option>\n      <option value=\"gabonese\">Gabonese</option>\n      <option value=\"gambian\">Gambian</option>\n      <option value=\"georgian\">Georgian</option>\n      <option value=\"german\">German</option>\n      <option value=\"ghanaian\">Ghanaian</option>\n      <option value=\"greek\">Greek</option>\n      <option value=\"grenadian\">Grenadian</option>\n      <option value=\"guatemalan\">Guatemalan</option>\n      <option value=\"guinea-bissauan\">Guinea-Bissauan</option>\n      <option value=\"guinean\">Guinean</option>\n      <option value=\"guyanese\">Guyanese</option>\n      <option value=\"haitian\">Haitian</option>\n      <option value=\"herzegovinian\">Herzegovinian</option>\n      <option value=\"honduran\">Honduran</option>\n      <option value=\"hungarian\">Hungarian</option>\n      <option value=\"icelander\">Icelander</option>\n      <option value=\"indian\">Indian</option>\n      <option value=\"indonesian\">Indonesian</option>\n      <option value=\"iranian\">Iranian</option>\n      <option value=\"iraqi\">Iraqi</option>\n      <option value=\"irish\">Irish</option>\n      <option value=\"israeli\">Israeli</option>\n      <option value=\"italian\">Italian</option>\n      <option value=\"ivorian\">Ivorian</option>\n      <option value=\"jamaican\">Jamaican</option>\n      <option value=\"japanese\">Japanese</option>\n      <option value=\"jordanian\">Jordanian</option>\n      <option value=\"kazakhstani\">Kazakhstani</option>\n      <option value=\"kenyan\">Kenyan</option>\n      <option value=\"kittian and nevisian\">Kittian and Nevisian</option>\n      <option value=\"kuwaiti\">Kuwaiti</option>\n      <option value=\"kyrgyz\">Kyrgyz</option>\n      <option value=\"laotian\">Laotian</option>\n      <option value=\"latvian\">Latvian</option>\n      <option value=\"lebanese\">Lebanese</option>\n      <option value=\"liberian\">Liberian</option>\n      <option value=\"libyan\">Libyan</option>\n      <option value=\"liechtensteiner\">Liechtensteiner</option>\n      <option value=\"lithuanian\">Lithuanian</option>\n      <option value=\"luxembourger\">Luxembourger</option>\n      <option value=\"macedonian\">Macedonian</option>\n      <option value=\"malagasy\">Malagasy</option>\n      <option value=\"malawian\">Malawian</option>\n      <option value=\"malaysian\">Malaysian</option>\n      <option value=\"maldivan\">Maldivan</option>\n      <option value=\"malian\">Malian</option>\n      <option value=\"maltese\">Maltese</option>\n      <option value=\"marshallese\">Marshallese</option>\n      <option value=\"mauritanian\">Mauritanian</option>\n      <option value=\"mauritian\">Mauritian</option>\n      <option value=\"mexican\">Mexican</option>\n      <option value=\"micronesian\">Micronesian</option>\n      <option value=\"moldovan\">Moldovan</option>\n      <option value=\"monacan\">Monacan</option>\n      <option value=\"mongolian\">Mongolian</option>\n      <option value=\"moroccan\">Moroccan</option>\n      <option value=\"mosotho\">Mosotho</option>\n      <option value=\"motswana\">Motswana</option>\n      <option value=\"mozambican\">Mozambican</option>\n      <option value=\"namibian\">Namibian</option>\n      <option value=\"nauruan\">Nauruan</option>\n      <option value=\"nepalese\">Nepalese</option>\n      <option value=\"new zealander\">New Zealander</option>\n      <option value=\"ni-vanuatu\">Ni-Vanuatu</option>\n      <option value=\"nicaraguan\">Nicaraguan</option>\n      <option value=\"nigerien\">Nigerien</option>\n      <option value=\"north korean\">North Korean</option>\n      <option value=\"northern irish\">Northern Irish</option>\n      <option value=\"norwegian\">Norwegian</option>\n      <option value=\"omani\">Omani</option>\n      <option value=\"pakistani\">Pakistani</option>\n      <option value=\"palauan\">Palauan</option>\n      <option value=\"panamanian\">Panamanian</option>\n      <option value=\"papua new guinean\">Papua New Guinean</option>\n      <option value=\"paraguayan\">Paraguayan</option>\n      <option value=\"peruvian\">Peruvian</option>\n      <option value=\"polish\">Polish</option>\n      <option value=\"portuguese\">Portuguese</option>\n      <option value=\"qatari\">Qatari</option>\n      <option value=\"romanian\">Romanian</option>\n      <option value=\"russian\">Russian</option>\n      <option value=\"rwandan\">Rwandan</option>\n      <option value=\"saint lucian\">Saint Lucian</option>\n      <option value=\"salvadoran\">Salvadoran</option>\n      <option value=\"samoan\">Samoan</option>\n      <option value=\"san marinese\">San Marinese</option>\n      <option value=\"sao tomean\">Sao Tomean</option>\n      <option value=\"saudi\">Saudi</option>\n      <option value=\"scottish\">Scottish</option>\n      <option value=\"senegalese\">Senegalese</option>\n      <option value=\"serbian\">Serbian</option>\n      <option value=\"seychellois\">Seychellois</option>\n      <option value=\"sierra leonean\">Sierra Leonean</option>\n      <option value=\"singaporean\">Singaporean</option>\n      <option value=\"slovakian\">Slovakian</option>\n      <option value=\"slovenian\">Slovenian</option>\n      <option value=\"solomon islander\">Solomon Islander</option>\n      <option value=\"somali\">Somali</option>\n      <option value=\"south african\">South African</option>\n      <option value=\"south korean\">South Korean</option>\n      <option value=\"spanish\">Spanish</option>\n      <option value=\"sri lankan\">Sri Lankan</option>\n      <option value=\"sudanese\">Sudanese</option>\n      <option value=\"surinamer\">Surinamer</option>\n      <option value=\"swazi\">Swazi</option>\n      <option value=\"swedish\">Swedish</option>\n      <option value=\"swiss\">Swiss</option>\n      <option value=\"syrian\">Syrian</option>\n      <option value=\"taiwanese\">Taiwanese</option>\n      <option value=\"tajik\">Tajik</option>\n      <option value=\"tanzanian\">Tanzanian</option>\n      <option value=\"thai\">Thai</option>\n      <option value=\"togolese\">Togolese</option>\n      <option value=\"tongan\">Tongan</option>\n      <option value=\"trinidadian or tobagonian\">Trinidadian or Tobagonian</option>\n      <option value=\"tunisian\">Tunisian</option>\n      <option value=\"turkish\">Turkish</option>\n      <option value=\"tuvaluan\">Tuvaluan</option>\n      <option value=\"ugandan\">Ugandan</option>\n      <option value=\"ukrainian\">Ukrainian</option>\n      <option value=\"uruguayan\">Uruguayan</option>\n      <option value=\"uzbekistani\">Uzbekistani</option>\n      <option value=\"venezuelan\">Venezuelan</option>\n      <option value=\"vietnamese\">Vietnamese</option>\n      <option value=\"welsh\">Welsh</option>\n      <option value=\"yemenite\">Yemenite</option>\n      <option value=\"zambian\">Zambian</option>\n      <option value=\"zimbabwean\">Zimbabwean</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Country of Resident</label>\n    <select [(ngModel)]=\"countryOfResident\" name=\"countryOfResident\" class=\"form-control\">\n      <option value=\"\">-- Please Choose One --</option>\n      <option value=\"Afganistan\">Afghanistan</option>\n      <option value=\"Albania\">Albania</option>\n      <option value=\"Algeria\">Algeria</option>\n      <option value=\"American Samoa\">American Samoa</option>\n      <option value=\"Andorra\">Andorra</option>\n      <option value=\"Angola\">Angola</option>\n      <option value=\"Anguilla\">Anguilla</option>\n      <option value=\"Antigua &amp; Barbuda\">Antigua &amp; Barbuda</option>\n      <option value=\"Argentina\">Argentina</option>\n      <option value=\"Armenia\">Armenia</option>\n      <option value=\"Aruba\">Aruba</option>\n      <option value=\"Australia\">Australia</option>\n      <option value=\"Austria\">Austria</option>\n      <option value=\"Azerbaijan\">Azerbaijan</option>\n      <option value=\"Bahamas\">Bahamas</option>\n      <option value=\"Bahrain\">Bahrain</option>\n      <option value=\"Bangladesh\">Bangladesh</option>\n      <option value=\"Barbados\">Barbados</option>\n      <option value=\"Belarus\">Belarus</option>\n      <option value=\"Belgium\">Belgium</option>\n      <option value=\"Belize\">Belize</option>\n      <option value=\"Benin\">Benin</option>\n      <option value=\"Bermuda\">Bermuda</option>\n      <option value=\"Bhutan\">Bhutan</option>\n      <option value=\"Bolivia\">Bolivia</option>\n      <option value=\"Bonaire\">Bonaire</option>\n      <option value=\"Bosnia &amp; Herzegovina\">Bosnia &amp; Herzegovina</option>\n      <option value=\"Botswana\">Botswana</option>\n      <option value=\"Brazil\">Brazil</option>\n      <option value=\"British Indian Ocean Ter\">British Indian Ocean Ter</option>\n      <option value=\"Brunei\">Brunei</option>\n      <option value=\"Bulgaria\">Bulgaria</option>\n      <option value=\"Burkina Faso\">Burkina Faso</option>\n      <option value=\"Burundi\">Burundi</option>\n      <option value=\"Cambodia\">Cambodia</option>\n      <option value=\"Cameroon\">Cameroon</option>\n      <option value=\"Canada\">Canada</option>\n      <option value=\"Canary Islands\">Canary Islands</option>\n      <option value=\"Cape Verde\">Cape Verde</option>\n      <option value=\"Cayman Islands\">Cayman Islands</option>\n      <option value=\"Central African Republic\">Central African Republic</option>\n      <option value=\"Chad\">Chad</option>\n      <option value=\"Channel Islands\">Channel Islands</option>\n      <option value=\"Chile\">Chile</option>\n      <option value=\"China\">China</option>\n      <option value=\"Christmas Island\">Christmas Island</option>\n      <option value=\"Cocos Island\">Cocos Island</option>\n      <option value=\"Colombia\">Colombia</option>\n      <option value=\"Comoros\">Comoros</option>\n      <option value=\"Congo\">Congo</option>\n      <option value=\"Cook Islands\">Cook Islands</option>\n      <option value=\"Costa Rica\">Costa Rica</option>\n      <option value=\"Cote DIvoire\">Cote D'Ivoire</option>\n      <option value=\"Croatia\">Croatia</option>\n      <option value=\"Cuba\">Cuba</option>\n      <option value=\"Curaco\">Curacao</option>\n      <option value=\"Cyprus\">Cyprus</option>\n      <option value=\"Czech Republic\">Czech Republic</option>\n      <option value=\"Denmark\">Denmark</option>\n      <option value=\"Djibouti\">Djibouti</option>\n      <option value=\"Dominica\">Dominica</option>\n      <option value=\"Dominican Republic\">Dominican Republic</option>\n      <option value=\"East Timor\">East Timor</option>\n      <option value=\"Ecuador\">Ecuador</option>\n      <option value=\"Egypt\">Egypt</option>\n      <option value=\"El Salvador\">El Salvador</option>\n      <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n      <option value=\"Eritrea\">Eritrea</option>\n      <option value=\"Estonia\">Estonia</option>\n      <option value=\"Ethiopia\">Ethiopia</option>\n      <option value=\"Falkland Islands\">Falkland Islands</option>\n      <option value=\"Faroe Islands\">Faroe Islands</option>\n      <option value=\"Fiji\">Fiji</option>\n      <option value=\"Finland\">Finland</option>\n      <option value=\"France\">France</option>\n      <option value=\"French Guiana\">French Guiana</option>\n      <option value=\"French Polynesia\">French Polynesia</option>\n      <option value=\"French Southern Ter\">French Southern Ter</option>\n      <option value=\"Gabon\">Gabon</option>\n      <option value=\"Gambia\">Gambia</option>\n      <option value=\"Georgia\">Georgia</option>\n      <option value=\"Germany\">Germany</option>\n      <option value=\"Ghana\">Ghana</option>\n      <option value=\"Gibraltar\">Gibraltar</option>\n      <option value=\"Great Britain\">Great Britain</option>\n      <option value=\"Greece\">Greece</option>\n      <option value=\"Greenland\">Greenland</option>\n      <option value=\"Grenada\">Grenada</option>\n      <option value=\"Guadeloupe\">Guadeloupe</option>\n      <option value=\"Guam\">Guam</option>\n      <option value=\"Guatemala\">Guatemala</option>\n      <option value=\"Guinea\">Guinea</option>\n      <option value=\"Guyana\">Guyana</option>\n      <option value=\"Haiti\">Haiti</option>\n      <option value=\"Hawaii\">Hawaii</option>\n      <option value=\"Honduras\">Honduras</option>\n      <option value=\"Hong Kong\">Hong Kong</option>\n      <option value=\"Hungary\">Hungary</option>\n      <option value=\"Iceland\">Iceland</option>\n      <option value=\"India\">India</option>\n      <option value=\"Indonesia\">Indonesia</option>\n      <option value=\"Iran\">Iran</option>\n      <option value=\"Iraq\">Iraq</option>\n      <option value=\"Ireland\">Ireland</option>\n      <option value=\"Isle of Man\">Isle of Man</option>\n      <option value=\"Israel\">Israel</option>\n      <option value=\"Italy\">Italy</option>\n      <option value=\"Jamaica\">Jamaica</option>\n      <option value=\"Japan\">Japan</option>\n      <option value=\"Jordan\">Jordan</option>\n      <option value=\"Kazakhstan\">Kazakhstan</option>\n      <option value=\"Kenya\">Kenya</option>\n      <option value=\"Kiribati\">Kiribati</option>\n      <option value=\"Korea North\">Korea North</option>\n      <option value=\"Korea Sout\">Korea South</option>\n      <option value=\"Kuwait\">Kuwait</option>\n      <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n      <option value=\"Laos\">Laos</option>\n      <option value=\"Latvia\">Latvia</option>\n      <option value=\"Lebanon\">Lebanon</option>\n      <option value=\"Lesotho\">Lesotho</option>\n      <option value=\"Liberia\">Liberia</option>\n      <option value=\"Libya\">Libya</option>\n      <option value=\"Liechtenstein\">Liechtenstein</option>\n      <option value=\"Lithuania\">Lithuania</option>\n      <option value=\"Luxembourg\">Luxembourg</option>\n      <option value=\"Macau\">Macau</option>\n      <option value=\"Macedonia\">Macedonia</option>\n      <option value=\"Madagascar\">Madagascar</option>\n      <option value=\"Malaysia\">Malaysia</option>\n      <option value=\"Malawi\">Malawi</option>\n      <option value=\"Maldives\">Maldives</option>\n      <option value=\"Mali\">Mali</option>\n      <option value=\"Malta\">Malta</option>\n      <option value=\"Marshall Islands\">Marshall Islands</option>\n      <option value=\"Martinique\">Martinique</option>\n      <option value=\"Mauritania\">Mauritania</option>\n      <option value=\"Mauritius\">Mauritius</option>\n      <option value=\"Mayotte\">Mayotte</option>\n      <option value=\"Mexico\">Mexico</option>\n      <option value=\"Midway Islands\">Midway Islands</option>\n      <option value=\"Moldova\">Moldova</option>\n      <option value=\"Monaco\">Monaco</option>\n      <option value=\"Mongolia\">Mongolia</option>\n      <option value=\"Montserrat\">Montserrat</option>\n      <option value=\"Morocco\">Morocco</option>\n      <option value=\"Mozambique\">Mozambique</option>\n      <option value=\"Myanmar\">Myanmar</option>\n      <option value=\"Nambia\">Nambia</option>\n      <option value=\"Nauru\">Nauru</option>\n      <option value=\"Nepal\">Nepal</option>\n      <option value=\"Netherland Antilles\">Netherland Antilles</option>\n      <option value=\"Netherlands\">Netherlands (Holland, Europe)</option>\n      <option value=\"Nevis\">Nevis</option>\n      <option value=\"New Caledonia\">New Caledonia</option>\n      <option value=\"New Zealand\">New Zealand</option>\n      <option value=\"Nicaragua\">Nicaragua</option>\n      <option value=\"Niger\">Niger</option>\n      <option value=\"Nigeria\">Nigeria</option>\n      <option value=\"Niue\">Niue</option>\n      <option value=\"Norfolk Island\">Norfolk Island</option>\n      <option value=\"Norway\">Norway</option>\n      <option value=\"Oman\">Oman</option>\n      <option value=\"Pakistan\">Pakistan</option>\n      <option value=\"Palau Island\">Palau Island</option>\n      <option value=\"Palestine\">Palestine</option>\n      <option value=\"Panama\">Panama</option>\n      <option value=\"Papua New Guinea\">Papua New Guinea</option>\n      <option value=\"Paraguay\">Paraguay</option>\n      <option value=\"Peru\">Peru</option>\n      <option value=\"Phillipines\">Philippines</option>\n      <option value=\"Pitcairn Island\">Pitcairn Island</option>\n      <option value=\"Poland\">Poland</option>\n      <option value=\"Portugal\">Portugal</option>\n      <option value=\"Puerto Rico\">Puerto Rico</option>\n      <option value=\"Qatar\">Qatar</option>\n      <option value=\"Republic of Montenegro\">Republic of Montenegro</option>\n      <option value=\"Republic of Serbia\">Republic of Serbia</option>\n      <option value=\"Reunion\">Reunion</option>\n      <option value=\"Romania\">Romania</option>\n      <option value=\"Russia\">Russia</option>\n      <option value=\"Rwanda\">Rwanda</option>\n      <option value=\"St Barthelemy\">St Barthelemy</option>\n      <option value=\"St Eustatius\">St Eustatius</option>\n      <option value=\"St Helena\">St Helena</option>\n      <option value=\"St Kitts-Nevis\">St Kitts-Nevis</option>\n      <option value=\"St Lucia\">St Lucia</option>\n      <option value=\"St Maarten\">St Maarten</option>\n      <option value=\"St Pierre &amp; Miquelon\">St Pierre &amp; Miquelon</option>\n      <option value=\"St Vincent &amp; Grenadines\">St Vincent &amp; Grenadines</option>\n      <option value=\"Saipan\">Saipan</option>\n      <option value=\"Samoa\">Samoa</option>\n      <option value=\"Samoa American\">Samoa American</option>\n      <option value=\"San Marino\">San Marino</option>\n      <option value=\"Sao Tome &amp; Principe\">Sao Tome &amp; Principe</option>\n      <option value=\"Saudi Arabia\">Saudi Arabia</option>\n      <option value=\"Senegal\">Senegal</option>\n      <option value=\"Serbia\">Serbia</option>\n      <option value=\"Seychelles\">Seychelles</option>\n      <option value=\"Sierra Leone\">Sierra Leone</option>\n      <option value=\"Singapore\">Singapore</option>\n      <option value=\"Slovakia\">Slovakia</option>\n      <option value=\"Slovenia\">Slovenia</option>\n      <option value=\"Solomon Islands\">Solomon Islands</option>\n      <option value=\"Somalia\">Somalia</option>\n      <option value=\"South Africa\">South Africa</option>\n      <option value=\"Spain\">Spain</option>\n      <option value=\"Sri Lanka\">Sri Lanka</option>\n      <option value=\"Sudan\">Sudan</option>\n      <option value=\"Suriname\">Suriname</option>\n      <option value=\"Swaziland\">Swaziland</option>\n      <option value=\"Sweden\">Sweden</option>\n      <option value=\"Switzerland\">Switzerland</option>\n      <option value=\"Syria\">Syria</option>\n      <option value=\"Tahiti\">Tahiti</option>\n      <option value=\"Taiwan\">Taiwan</option>\n      <option value=\"Tajikistan\">Tajikistan</option>\n      <option value=\"Tanzania\">Tanzania</option>\n      <option value=\"Thailand\">Thailand</option>\n      <option value=\"Togo\">Togo</option>\n      <option value=\"Tokelau\">Tokelau</option>\n      <option value=\"Tonga\">Tonga</option>\n      <option value=\"Trinidad &amp; Tobago\">Trinidad &amp; Tobago</option>\n      <option value=\"Tunisia\">Tunisia</option>\n      <option value=\"Turkey\">Turkey</option>\n      <option value=\"Turkmenistan\">Turkmenistan</option>\n      <option value=\"Turks &amp; Caicos Is\">Turks &amp; Caicos Is</option>\n      <option value=\"Tuvalu\">Tuvalu</option>\n      <option value=\"Uganda\">Uganda</option>\n      <option value=\"Ukraine\">Ukraine</option>\n      <option value=\"United Arab Erimates\">United Arab Emirates</option>\n      <option value=\"United Kingdom\">United Kingdom</option>\n      <option value=\"United States of America\">United States of America</option>\n      <option value=\"Uraguay\">Uruguay</option>\n      <option value=\"Uzbekistan\">Uzbekistan</option>\n      <option value=\"Vanuatu\">Vanuatu</option>\n      <option value=\"Vatican City State\">Vatican City State</option>\n      <option value=\"Venezuela\">Venezuela</option>\n      <option value=\"Vietnam\">Vietnam</option>\n      <option value=\"Virgin Islands (Brit)\">Virgin Islands (Brit)</option>\n      <option value=\"Virgin Islands (USA)\">Virgin Islands (USA)</option>\n      <option value=\"Wake Island\">Wake Island</option>\n      <option value=\"Wallis &amp; Futana Is\">Wallis &amp; Futana Is</option>\n      <option value=\"Yemen\">Yemen</option>\n      <option value=\"Zaire\">Zaire</option>\n      <option value=\"Zambia\">Zambia</option>\n      <option value=\"Zimbabwe\">Zimbabwe</option>\n    </select>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Name of a Trip</h2>\n\n<div> Destination, Date</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">chat</div>\n    <div class=\"col-md-4\">memebers and host\n      <div class=\"host\">Host</div>\n      <div class=\"members\"> Members</div>\n    </div>\n  </div>\n\n  <br />\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <div>Description</div>\n    </div>\n\n    <div class=\"col-md-2\">\n      <div class=\"joinButton\">\n        <button type=\"button\" class=\"btn btn-default\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] (click)=\"searchTrips()\">Join</button>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(525);
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

/***/ })

},[721]);
//# sourceMappingURL=main.bundle.map