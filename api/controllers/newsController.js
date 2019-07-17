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
    handleHeadlinesResponse(newsControllerResponse, newsApiResponse);
  }).catch(error => {
    handleError(newsControllerResponse, error);
  });
};

exports.getHeadlinesByBiasGroupId = function(req, newsControllerResponse) {
  const newsapi = new NewsAPI(process.env.GOOGLE_API_KEY);
  var biasGroupId = req.params.biasGroupId;
  var sources = newsMetadataService.getSourcesByBiasGroupId(biasGroupId);

  newsapi.v2.topHeadlines({
    sources: getSourceIds(sources),
    language: 'en',
    pageSize: getPageSize(req)
  }).then(newsApiResponse => {
    handleHeadlinesResponse(newsControllerResponse, newsApiResponse);
  }).catch(error => {
    handleError(newsControllerResponse, error);
  });
};

exports.getHeadlinesBySourceId = function(req, newsControllerResponse) {
  const newsapi = new NewsAPI(process.env.GOOGLE_API_KEY);
  var sourceId = req.params.sourceId;

  newsapi.v2.topHeadlines({
    sources: sourceId,
    language: 'en',
    pageSize: getPageSize(req)
  }).then(newsApiResponse => {
    handleHeadlinesResponse(newsControllerResponse, newsApiResponse);
  }).catch(error => {
    handleError(newsControllerResponse, error);
  });
};

exports.getHeadlinesByTopic = function(req, newsControllerResponse) {
  const newsapi = new NewsAPI(process.env.GOOGLE_API_KEY);
  var sources = newsMetadataService.getSources();

  newsapi.v2.topHeadlines({
    q: req.params.topic,
    sources: getSourceIds(sources),
    language: 'en',
    pageSize: getPageSize(req)
  }).then(newsApiResponse => {
    handleHeadlinesResponse(newsControllerResponse, newsApiResponse);
  }).catch(error => {
    handleError(newsControllerResponse, error);
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
    handleHeadlinesResponse(newsControllerResponse, newsApiResponse);
  }).catch(error => {
    handleError(newsControllerResponse, error);
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

exports.getTopics = function(req, newsControllerResponse) {
  var topics = newsMetadataService.getTopics();

  newsControllerResponse.json({
    status: "ok",
    totalResults: topics.length,
    provider: "PowerOfTruth Server",
    topics: topics
  });
};

function handleHeadlinesResponse(newsControllerResponse, newsApiResponse) {
  console.log(newsApiResponse);

  newsControllerResponse.json(
    responseTranslatorService.translateEverythingResponse(newsApiResponse)
  );
};

function handleError(newsControllerResponse, error) {
  console.error(error);

  var errorResponse = {
    status: 'error',
    error: 'PowerOfTruth Server Error',
    provider: 'PowerOfTruth Server'
  };

  newsControllerResponse.json(errorResponse);
}

function getSourceIds(sources) {
  return sources.map(source => source.id).join(',');
};

function getPageSize(req) {
  return isNaN(req.query.pageSize) 
    ? 20 
    : req.query.pageSize;
}