const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

const TripSchema = mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    tripName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    members: {
        type: [String],
        required: true
    },
    chat : {
        type: [String],
        required: false
    }
});

const Trip = module.exports = mongoose.model('Trip', TripSchema);

module.exports.getTripById = function(id, callback){
    Trip.findById(id, callback);
}

module.exports.getTrips = function(callback){
    Trip.find(callback);
}

module.exports.getTripsByD = function(destination,callback){
    const query = {destination: destination};

    Trip.find( {query , callback });
}
module.exports.getTripByTripName = function(tripName, callback){
    const query = {tripName: tripName}
    Trip.findOne(query, callback);
}

module.exports.addTrip = function(newTrip, callback){
   /* Trip.save(newTrip, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
}*/
   // bcrypt.genSalt(10, (err, salt) => {
     //   bcrypt.hash(newTrip.tripName, salt, (err, hash) => {
       //     if(err) throw err;
      //      newTrip.tripName = hash;
            newTrip.save(callback);
        //});
    //});
}

