const mockNewsAPI = require('newsapi');

exports.setupSuccessResponse = function(expectedResponse) {
  const mockNewsAPIImp = {
    v2: {
      topHeadlines: function() {
        return Promise.resolve(expectedResponse);
      }
    }
  };

  mockNewsAPI.mockImplementation(() => mockNewsAPIImp);
};