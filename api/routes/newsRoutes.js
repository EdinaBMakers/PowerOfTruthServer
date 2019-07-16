'use strict';

module.exports = function(app) {
  var newsController = require('../controllers/newsController');

  app.route('/headlines')
    .get(newsController.getHeadlines);

  app.route('/headlines/:biasGroupId')
    .get(newsController.getHeadlinesByBiasGroupId);

  app.route('/search')
    .get(newsController.getEverything);
};