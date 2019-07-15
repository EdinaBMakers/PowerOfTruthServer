'use strict';

module.exports = function(app) {
  var newsController = require('../controllers/newsController');

  app.route('/headlines')
    .get(newsController.getHeadlines);

  app.route('/everything')
    .get(newsController.getEverything);
};