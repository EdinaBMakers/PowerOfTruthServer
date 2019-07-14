var express = require('express');
var  app = express();

var routes = require('./api/routes/newsRoutes');
routes(app);

module.exports = app