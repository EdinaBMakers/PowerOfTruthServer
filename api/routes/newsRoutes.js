'use strict';

module.exports = function(app) {
  var newsController = require('../controllers/newsController');

  app.route('/headlines')
    .get(newsController.getHeadlines);

  app.route('/headlines/bias/:biasGroupId')
    .get(newsController.getHeadlinesByBiasGroupId);

  app.route('/headlines/source/:sourceId')
    .get(newsController.getHeadlinesBySourceId);

  app.route('/headlines/topic/:topic')
    .get(newsController.getHeadlinesByTopic);

  app.route('/search')
    .get(newsController.getEverything);

  app.route('/biasGroups')
    .get(newsController.getBiasGroups);

  app.route('/topics')
    .get(newsController.getTopics);
};