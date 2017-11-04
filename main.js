require('dotenv').config();

var app = require('./app/server');
const _PORT_ = 8080;


app.listen(_PORT_, function() {
    console.log('Server is running');
});