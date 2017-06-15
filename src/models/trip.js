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
    }
});

const Trip = module.exports = mongoose.model('Trip', TripSchema);

module.exports.getTripById = function(id, callback){
    Trip.findById(id, callback);
}

module.exports.getUserByUsername = function(tripName, callback){
    const query = {tripName: tripName}
    Trip.findOne(query, callback);
}

module.exports.addTrip = function(newTrip, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newTrip.tripName, salt, (err, hash) => {
            if(err) throw err;
            newTrip.tripName = hash;
            newTrip.save(callback);
        });
    });
}

