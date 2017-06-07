const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./scr/config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', function () {
    console.log('connected to db'+ config.database);
});

mongoose.connection.on('error', function (err) {
    console.log('connected error'+ err);
});

const app = express();

const users = require('./scr/routes/users');

const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname,'./scr/public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./scr/config/passport')(passport);

app.use('/users', users);

app.get('/', function(req,res) {
    res.send('Invalid');
});

app.listen(port, function() {
    console.log('sarted on port' + port);
});
