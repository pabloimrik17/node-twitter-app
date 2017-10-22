var express = require('express');
var app = express();

var routes = require('./routes')(app);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../public/views');

app.use(express.static(__dirname + '/../public'));



module.exports = app;