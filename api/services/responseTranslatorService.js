'use strict';

const newsMetadataService = require('../services/newsMetadataService');

exports.translateHeadlinesResponse = function(newsApiHeadlinesResponse) {
  var articles = [];

  newsApiHeadlinesResponse.articles.forEach(article => {
    articles.push({
      source: article.source,
      author: article.author,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content,
      politicalBias: newsMetadataService.getBiasGroupBySource(article.source.id).name
    });
  });

  var headlinesResponse = {
    status: newsApiHeadlinesResponse.status,
    totalResults: newsApiHeadlinesResponse.totalResults,
    provider: "PowerOfTruth Server",
    articles: articles
  };

  return headlinesResponse
};

exports.translateEverythingResponse = function(newsApiEverythingResponse) {
  var articles = [];

  newsApiEverythingResponse.articles.forEach(article => {
    articles.push({
      source: article.source,
      author:article.author,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content,
      politicalBias: newsMetadataService.getBiasGroupBySource(article.source.id).name
    });
  });

  var everythingResponse = {
    status: newsApiEverythingResponse.status,
    totalResults:newsApiEverythingResponse.totalResults,
    provider: "PowerOfTruth Server",
    articles: articles
  };

  return everythingResponse
};