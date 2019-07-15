'use strict';

const newsMetadataService = require('../services/newsMetadataService');
const responseTranslatorService = require('../services/responseTranslatorService');
const NewsAPI = require('newsapi');

exports.getHeadlines = function(req, newsControllerResponse) {
  const newsapi = new NewsAPI(process.env.GOOGLE_API_KEY);

  newsapi.v2.topHeadlines({
    sources: getSourceIds(),
    language: 'en',
    pageSize: getPageSize(req)
  }).then(newsApiResponse => {
    console.log(newsApiResponse);

    newsControllerResponse.json
    (responseTranslatorService.translateHeadlinesResponse(newsApiResponse));
  }).catch(error => {
    console.error(error);

    var errorResponse = {
      status: 'error',
      error: 'PowerOfTruth Server Error',
      provider: 'PowerOfTruth Server'
    };

    newsControllerResponse.json(errorResponse);
  });
};

exports.getEverything = function(req, newsControllerResponse) {
  const newsapi = new NewsAPI(process.env.GOOGLE_API_KEY);

  newsapi.v2.everything({
    q: req.query.q,
    sources: getSourceIds(),
    language: 'en',
    sortBy: 'relevancy',
    pageSize: getPageSize(req)
  }).then(newsApiResponse => {
    console.log(newsApiResponse)
    newsControllerResponse.json(ResponseTranslatorService.translateEverythingResponse(newsApiResponse));
  }).catch(error => {
    var errorResponse = {
      status: "error",
      error: "PowerOfTruth Server Error",
      provider: "PowerOfTruth Server",
    };

    console.error(error);
    newsControllerResponse.json(errorResponse)
  }); 
};

function getSourceIds() {
  return newsMetadataService.getSources().map(source => source.id).join(',');
};

function getPageSize(req) {
  return isNaN(req.query.pageSize) 
    ? 10 
    : req.query.pageSize;
}