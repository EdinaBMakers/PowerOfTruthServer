'use strict';

const newsMetadataService = require('../services/newsMetadataService');
const responseTranslatorService = require('../services/responseTranslatorService');
const NewsAPI = require('newsapi');

exports.getHeadlines = function(req, newsControllerResponse) {
  const newsapi = new NewsAPI(process.env.GOOGLE_API_KEY);

  newsapi.v2.topHeadlines({
    sources: newsMetadataService.getSources().map(source => source.id).join(','),
    language: 'en',
    pageSize: isNaN(req.query.pageSize) ? 10 : req.query.pageSize
  }).then(newsApiResponse => {
    // console.log(newsApiResponse);
    newsControllerResponse.json
    (responseTranslatorService.translateHeadlinesResponse(newsApiResponse));
  }).catch(error => {
    var errorResponse = {
      status: 'error',
      error: 'PowerOfTruth Server Error',
      provider: 'PowerOfTruth Server'
    };

    // console.log(error);
    newsControllerResponse.json(errorResponse);
  });
};