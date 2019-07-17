'use strict';

const request = require('supertest');
const app = require('../app');
const newsApiHelpers = require('./testHelpers/newsApiHelpers');
const testResponses = require('./testData/testResponses');

jest.genMockFromModule('newsapi');
jest.mock('newsapi');

console.log = jest.fn();
console.error = jest.fn();

describe('Newscontroller', () => {
  describe('getHeadlines', () => {
    test('It should respond to the GET method', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfulNewsApiResponseWithZeroArticle);

      request(app).get('/headlines').then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    });

    test('It should respond with correct message if News API returns 0 article', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfulNewsApiResponseWithZeroArticle);

      request(app).get('/headlines').then((response) => {
        expect(response.body).toStrictEqual(testResponses.successfulResponseWithZeroArticle);
        done();
      });
    });

    test('It should respond with correct message if News API returns multiple articles', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfullNewsApiResponseWithMultipleArticles);

      request(app).get('/headlines').then((response) => {
        expect(response.body).toStrictEqual(testResponses.successfulResponseWithMultipleArticles);
        done();
      });
    });

    test('It should return failure response if News API request failed', (done) => {
      newsApiHelpers.setupFailureResponse();

      request(app).get('/headlines').then((response) => {
        expect(response.body.status).toBe('error');
        expect(response.body.error).toBe('PowerOfTruth Server Error');
        done();
      });
    });
  });

  describe('getEverything', () => {
    test('It should respond to the GET method', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfulNewsApiResponseWithZeroArticle);

      request(app).get('/search').then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    });

    test('It should respond with correct message if News API returns 0 article', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfulNewsApiResponseWithZeroArticle);

      request(app).get('/search').then((response) => {
        expect(response.body).toStrictEqual(testResponses.successfulResponseWithZeroArticle);
        done();
      });
    });

    test('It should respond with correct message if News API returns multiple articles', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfullNewsApiResponseWithMultipleArticles);

      request(app).get('/search').then((response) => {
        expect(response.body).toStrictEqual(testResponses.successfulResponseWithMultipleArticles);
        done();
      });
    });

    test('It should return failure response if News API request failed', (done) => {
      newsApiHelpers.setupFailureResponse();

      request(app).get('/search').then((response) => {
        expect(response.body.status).toBe('error');
        expect(response.body.error).toBe('PowerOfTruth Server Error');
        done();
      });
    });
  });

  describe('getHeadlinesByBiasGoupId', () => {
    test('It should respond to the GET method', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfulNewsApiResponseWithZeroArticle);

      request(app).get('/headlines/bias/right').then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    });

    test('It should respond with correct message if News API returns 0 article', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfulNewsApiResponseWithZeroArticle);

      request(app).get('/headlines/bias/left').then((response) => {
        expect(response.body).toStrictEqual(testResponses.successfulResponseWithZeroArticle);
        done();
      });
    });

    test('It should respond with correct message if News API returns multiple articles', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfullNewsApiResponseWithMultipleArticlesForLeftBiasGroup);

      request(app).get('/headlines/bias/left').then((response) => {
        expect(response.body).toStrictEqual(testResponses.successfulResponseWithMultipleArticlesForLeftBiasGroup);
        done();
      });
    });

    test('It should return failure response if News API request failed', (done) => {
      newsApiHelpers.setupFailureResponse();

      request(app).get('/headlines/bias/left').then((response) => {
        expect(response.body.status).toBe('error');
        expect(response.body.error).toBe('PowerOfTruth Server Error');
        done();
      });
    });
  });

  describe('getBiasGroups', () => {
    test('It should respond to the GET method', (done) => {
      request(app).get('/biasGroups').then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    });
  });

  describe('getHeadlinesBySourceId', () => {
    test('It should respond to the GET method', (done) => {
      request(app).get('/headlines/source/cnn').then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    });
  });

  describe('getTopics', () => {
    test('It should respond to the GET method', (done) => {
      request(app).get('/topics').then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    });
  });

  describe('getHeadlinesByTopic', () => {
    test('It should respond to the GET method', (done) => {
      request(app).get('/headlines/topic/trump').then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    });
  });
});