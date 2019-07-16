'use strict';

const newsMetadataService = require('../services/newsMetadataService');
const responseTranslatorService = require('../services/responseTranslatorService');
const NewsAPI = require('newsapi');

exports.getHeadlines = function(req, newsControllerResponse) {
  const newsapi = new NewsAPI(process.env.GOOGLE_API_KEY);
  var sources = newsMetadataService.getSources();

  newsapi.v2.topHeadlines({
    sources: getSourceIds(sources),
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

exports.getHeadlinesByBiasGroupId = function(req, newsControllerResponse) {
  const newsapi = new NewsAPI(process.env.GOOGLE_API_KEY);
  var biasGroupId = req.params.biasGroupId;
  var sources = newsMetadataService.getSourcesGroupByBiasGroupId(biasGroupId);

  newsapi.v2.topHeadlines({
    sources: getSourceIds(sources),
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
  var sources = newsMetadataService.getSources();

  newsapi.v2.everything({
    q: req.query.q,
    sources: getSourceIds(sources),
    language: 'en',
    sortBy: 'relevancy',
    pageSize: getPageSize(req)
  }).then(newsApiResponse => {
    console.log(newsApiResponse)
    newsControllerResponse.json(
      responseTranslatorService.translateEverythingResponse(newsApiResponse)
    );
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

exports.getBiasGroups = function(req, newsControllerResponse) {
  var biasGroups = newsMetadataService.getBiasGroups();

  newsControllerResponse.json({
    status: "ok",
    totalResults: biasGroups.length,
    provider: "PowerOfTruth Server",
    biasGroups: biasGroups
  });
};

function getSourceIds(sources) {
  return sources.map(source => source.id).join(',');
};

function getPageSize(req) {
  return isNaN(req.query.pageSize) 
    ? 20 
    : req.query.pageSize;
}