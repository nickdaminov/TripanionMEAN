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

// Register
router.post('/createTrip', (req, res, next) => {
    let newTrip = new Trip({
        destination: req.body.destination,
        date: req.body.date,
        tripName: req.body.tripName,
        description: req.body.description
    });

Trip.addTrip(newTrip, (err, user) => {
    if(err){
        res.json({success: false, msg:'Failed to create the trip'});
    } else {
        res.json({success: true, msg:'Trip created'});
}
});
})

// Get All Trips
router.get('/trips', function(req, res, next){
    Trip.find(function(err, trips){
        if(err){
            res.send(err);
        }
        res.json(trips);
    });
});

// Get Single Task
/*router.get('/trip/:destination', function(req, res, next){

    mongojs.
    Trip.find({destination: mongojs.ObjectId(req.params.destination)}, function(err, trips) {
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});*/

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