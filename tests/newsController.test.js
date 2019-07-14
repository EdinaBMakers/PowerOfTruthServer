'use strict';

const request = require('supertest');
const app = require('../app');
const newsApiHelpers = require('./testHelpers/newsApiHelpers');
const testResponses = require('./testData/testResponses');

jest.genMockFromModule('newsapi');
jest.mock('newsapi');

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
  });
});