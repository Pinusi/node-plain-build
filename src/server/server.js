var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var router = require('./routes/router')(app);

//jade for views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//static resources
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;