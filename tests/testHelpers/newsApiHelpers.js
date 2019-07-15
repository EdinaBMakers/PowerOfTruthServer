const mockNewsAPI = require('newsapi');

exports.setupSuccessResponse = function(expectedResponse) {
  const mockNewsApiImp = {
    v2: {
      topHeadlines: function() {
        return Promise.resolve(expectedResponse);
      },
      everything: function() {
        return Promise.resolve(expectedResponse);
      }
    }
  };
  
  mockNewsAPI.mockImplementation(() => mockNewsApiImp);
}

exports.setupFailureResponse = function() {
  const mockNewsApiImp = {
    v2: {
      topHeadlines: function() {
        return Promise.reject(new Error('News API error'));
      },
      everything: function() {
        return Promise.reject(new Error('News API error'));
      }
    }
  };

  mockNewsAPI.mockImplementation(() => mockNewsApiImp)
};