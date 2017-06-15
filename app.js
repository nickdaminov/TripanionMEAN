const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./src/config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', function () {
    console.log('connected to db'+ config.database);
});

mongoose.connection.on('error', function (err) {
    console.log('connected error'+ err);
});

const app = express();

const users = require('./src/routes/users');
const trips = require('./src/routes/trips');


//const port = 3000;
const port = process.env.PORT || 8080;


app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./src/config/passport')(passport);

app.use('/users', users);
app.use('/trips', trips);


app.get('/', function(req,res) {
    res.send('Invalid');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function() {
    console.log('sarted on port' + port);
});
