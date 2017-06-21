/*const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Trip = require('../models/trip');

// Register
router.post('/createTrip', (req, res, next) => {
    let newTrip = new Trip({
        destination: req.body.destination,
        date: req.body.date,
        tripName: req.body.tripName,
        description: req.body.description
    });

    Tr.addTrip(newTrip, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to create the trip'});
        } else {
            res.json({success: true, msg:'Trip created'});
        }
    });
});

module.exports = router;*/

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Trip = require('../models/trip');
const mongojs = require('mongojs');

// Update Trip
//router.get('/trip/:id', function(req, res, next){
//    var member = req.body.member;
//    var id = req.body.id;
    /*var updTrip = {};

    if(trip.isDone){
        updTrip.isDone = task.isDone;
    }

    if(trip.name){
        updTrip.name = trip.name;
    }

    if(!updTrip){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {*/
        //Trip.update({_id: mongojs.ObjectId(id)},{$push:{members: member}}, {}, function(err, task){
       //     if(err){
     //           res.send(err);
   //         }
 //           res.json(trip);
//        });
    //}
//});
// Get Single Trip
router.get('/trip/:id', function(req, res, next){

    Trip.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, trip){
        if(err){
            res.send(err);
        }
        res.json(trip);
    });
});

// Get All Trips
router.get('/trips', function(req, res, next){
    Trip.find(function(err, trips){
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});


// Delete Task
router.delete('/trip/:id', function(req, res, next){
    Trip.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, trip){
        if(err){
            res.send(err);
        }
        res.json(trip);
    });
});



// Register
router.post('/createTrip', (req, res, next) => {
    let newTrip = new Trip({
        destination: req.body.destination,
        date: req.body.date,
        tripName: req.body.tripName,
        description: req.body.description,
        host: req.body.host,
        members:[req.body.host]
    });

Trip.addTrip(newTrip, (err, user) => {
    if(err){
        res.json({success: false, msg:'Failed to create the trip'});
    } else {
        res.json({success: true, msg:'Trip created'});
}
});
})

// Get Single Ttrips
router.get('/Lithuania', function(req, res, next){
    Trip.find({destination: "Lithuania"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});

router.get('/Italy', function(req, res, next){
    Trip.find({destination: "Italy"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});

router.get('/Austria', function(req, res, next){
    Trip.find({destination: "Austria"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});

router.get('/Belgium', function(req, res, next){
    Trip.find({destination: "Belgium"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});

router.get('/Latvia', function(req, res, next){
    Trip.find({destination: "Latvia"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});

router.get('/Bulgaria', function(req, res, next){
    Trip.find({destination: "Bulgaria"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});

router.get('/Croatia', function(req, res, next){
    Trip.find({destination: "Croatia"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Luxembourg', function(req, res, next){
    Trip.find({destination: "Luxembourg"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Cyprus', function(req, res, next){
    Trip.find({destination: "Cyprus"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Malta', function(req, res, next){
    Trip.find({destination: "Malta"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});

router.get('/Czech Republic', function(req, res, next){
    Trip.find({destination: "Czech Republic"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Netherlands', function(req, res, next){
    Trip.find({destination: "Netherlands"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Denmark', function(req, res, next){
    Trip.find({destination: "Denmark"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Poland', function(req, res, next){
    Trip.find({destination: "Poland"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Estonia', function(req, res, next){
    Trip.find({destination: "Estonia"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Portugal', function(req, res, next){
    Trip.find({destination: "Portugal"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Finland', function(req, res, next){
    Trip.find({destination: "Finland"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Romania', function(req, res, next){
    Trip.find({destination: "Romania"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/France', function(req, res, next){
    Trip.find({destination: "France"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});

router.get('/Slovakia', function(req, res, next){
    Trip.find({destination: "Slovakia"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Germany', function(req, res, next){
    Trip.find({destination: "Germany"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Slovenia', function(req, res, next){
    Trip.find({destination: "Slovenia"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Greece', function(req, res, next){
    Trip.find({destination: "Greece"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Spain', function(req, res, next){
    Trip.find({destination: "Spain"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Hungary', function(req, res, next){
    Trip.find({destination: "Hungary"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Sweden', function(req, res, next){
    Trip.find({destination: "Sweden"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/Ireland', function(req, res, next){
    Trip.find({destination: "Ireland"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});
router.get('/United Kingdom', function(req, res, next){
    Trip.find({destination: "United Kingdom"}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});



// Update Trip
router.put('/trip/:id', function(req, res, next){
    var trip = req.body;
    var updTrip = {};

    if(trip._id){
        updTrip._id = trip._id;
    }

   if(trip.destination){
        updTrip.destination = trip.destination;
    }
    if(trip.date){
        updTrip.date = trip.date;
    }
    if(trip.tripName){
        updTrip.tripName = trip.tripName;
    }
    if(trip.description){
        updTrip.description = trip.description;
    }
    if(trip.host){
        updTrip.host = trip.host;
    }
    if(trip.members){
        updTrip.members = trip.members;
    }
    if(trip.chat){
        updTrip.chat = trip.chat;
    }
    console.log(trip);

    console.log(updTrip);



    if(!updTrip){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        Trip.update({_id: mongojs.ObjectId(req.params.id)},updTrip, {}, function(err, trip){
            if(err){
                res.send(err);
            }
            console.log("here");
            res.json(trip);
        });
    }
});
// Get All Trips
/*router.get('/trip', function(req, res, next){
 db.tasks.find(function(err, tasks){
 if(err){
 res.send(err);
 }
 res.json(trip);
 });
 });



 // Get Single Task
 router.get('/trip/:id', function(req, res, next){
 db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
 if(err){
 res.send(err);
 }
 res.json(task);
 });
 });

 //Save Task
 router.post('/task', function(req, res, next){
 var task = req.body;
 if(!task.title || !(task.isDone + '')){
 res.status(400);
 res.json({
 "error": "Bad Data"
 });
 } else {
 db.tasks.save(task, function(err, task){
 if(err){
 res.send(err);
 }
 res.json(task);
 });
 }
 });

 // Delete Task
 router.delete('/task/:id', function(req, res, next){
 db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
 if(err){
 res.send(err);
 }
 res.json(task);
 });
 });

 // Update Task
 router.put('/task/:id', function(req, res, next){
 var task = req.body;
 var updTask = {};

 if(task.isDone){
 updTask.isDone = task.isDone;
 }

 if(task.title){
 updTask.title = task.title;
 }

 if(!updTask){
 res.status(400);
 res.json({
 "error":"Bad Data"
 });
 } else {
 db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
 if(err){
 res.send(err);
 }
 res.json(task);
 });
 }
 });*/

module.exports = router;
