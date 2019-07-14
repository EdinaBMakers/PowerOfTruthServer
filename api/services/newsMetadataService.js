'use strict';

exports.getBiasGroups = function() {
  return [
    {
      id: 1,
      name: "left"
    }, 
    {
      id: 2,
      name: "left-center"
    },
    {
      id: 3,
      name: "least biased"
    },
    {
      id: 4,
      name: "rigth-center"
    },
    {
      id: 5,
      name: "right"
    }];
};

exports.getSources = function() {
  return [
    {
      id: "bbc-news",
      name: "BBC News",
      biasGroupId: 2
    },
    {
      id: "independent",
      name: "Independent",
      biasGroupId: 2
    },
    {
      id: "the-huffington-post",
      name: "The Huffington Post",
      biasGroupId: 1
    },
    {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
      biasGroupId: 2
    },
    {
      id: "cnn",
      name: "CNN",
      biasGroupId: 1
    },
    {
      id: "daily-mail",
      name: "Daily Mail",
      biasGroupId: 5
    },
    {
      id: "the-economist",
      name: "The Economist",
      biasGroupId: 3
    }];
};

exports.getBiasGroupBySource = function(sourceId) {
  var source = this.getSources().find(source => source.id === sourceId)
  return this.getBiasGroups().find(biasGroup => biasGroup.id === source.biasGroupId)
};