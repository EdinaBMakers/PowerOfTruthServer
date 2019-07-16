'use strict';

exports.getBiasGroups = function() {
  return [
    {
      id: "left",
      name: "left"
    }, 
    {
      id: "left-center",
      name: "left-center"
    },
    {
      id: "least-biased",
      name: "least biased"
    },
    {
      id: "right-center",
      name: "right-center"
    },
    {
      id: "right",
      name: "right"
    }];
};

exports.getSources = function() {
  return [
    {
      id: "bbc-news",
      name: "BBC News",
      biasGroupId: "left-center"
    },
    {
      id: "independent",
      name: "Independent",
      biasGroupId: "left-center"
    },
    {
      id: "the-huffington-post",
      name: "The Huffington Post",
      biasGroupId: "left"
    },
    {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
      biasGroupId: "left-center"
    },
    {
      id: "cnn",
      name: "CNN",
      biasGroupId: "left"
    },
    {
      id: "daily-mail",
      name: "Daily Mail",
      biasGroupId: "right"
    },
    {
      id: "the-economist",
      name: "The Economist",
      biasGroupId: "least-biased"
    }];
};

exports.getBiasGroupBySourceId = function(sourceId) {
  var source = this.getSources().find(source => source.id === sourceId)
  return this.getBiasGroups().find(biasGroup => biasGroup.id === source.biasGroupId)
};

exports.getSourcesGroupByBiasGroupId = function(biasGroupId) {
  return this.getSources().filter(source => source.biasGroupId === biasGroupId);
};