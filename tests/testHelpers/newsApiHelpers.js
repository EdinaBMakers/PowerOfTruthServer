const mockNewsAPI = require('newsapi');

exports.setupSuccessResponse = function(expectedResponse) {
  const mockNewsAPIImp = {
    v2: {
      topHeadlines: function() {
        return Promise.resolve(expectedResponse);
      },
      everything: function() {
        return Promise.resolve(expectedResponse);
      }
    }
  };

  mockNewsAPI.mockImplementation(() => mockNewsAPIImp);
};

exports.setupFailureResponse = function() {
  const mockNewsAPIImp = {
    v2: {
      topHeadlines: function() {
        return Promise.reject(new Error('News API error'));
      }
    }
  }

  mockNewsAPI.mockImplementation(() => mockNewsAPIImp)
};