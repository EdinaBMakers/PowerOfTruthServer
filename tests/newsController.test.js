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
        testResponses.successfulNewsApiResponseWithZeroArticles);

      request(app).get('/headlines').then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    });

    test('It should respond with correct message if News API returns 0 article', (done) => {
      newsApiHelpers.setupSuccessResponse(
        testResponses.successfulNewsApiResponseWithZeroArticles);

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
        testResponses.successfulNewsApiResponseWithZeroArticles);

      request(app).get('/everything').then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    });
  });
});