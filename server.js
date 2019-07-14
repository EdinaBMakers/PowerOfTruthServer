require('dotenv').config();

var app = require('./app');
var  port = process.env.PORT || 3000;

app.listen(port);

console.log('PowerOfTruth API server started on: ' + port);