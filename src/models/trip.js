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
    host: {
        type: String,
        required: true
    },
    members: {
        type: Array,
        required: true
    }
});

const Trip = module.exports = mongoose.model('Trip', TripSchema);