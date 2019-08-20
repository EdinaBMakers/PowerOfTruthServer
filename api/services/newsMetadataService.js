'use strict';

exports.getBiasGroups = function() {
  return [
    {
      id: "Left-Wing",
      name: "Left-Wing"
    }, 
    {
      id: "Left-Center",
      name: "Left-Center"
    },
    {
      id: "Least-Biased",
      name: "Least-Biased"
    },
    {
      id: "Right-Center",
      name: "Right-Center"
    },
    {
      id: "Right-Wing",
      name: "Right-Wing"
    }];
};

exports.getSources = function() {
  return [
    {
      id: "bbc-news",
      name: "BBC News",
      biasGroupId: "Left-Center"
    },
    {
      id: "independent",
      name: "Independent",
      biasGroupId: "Left-Center"
    },
    {
      id: "the-huffington-post",
      name: "The Huffington Post",
      biasGroupId: "Left-Wing"
    },
    {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
      biasGroupId: "Left-Center"
    },
    {
      id: "cnn",
      name: "CNN",
      biasGroupId: "Left-Wing"
    },
    {
      id: "daily-mail",
      name: "Daily Mail",
      biasGroupId: "Right-Wing"
    }];
};

exports.getTopics = function() {
  return ["Trump", "Brexit", "Bitcoin", "EU"];
};

exports.getBiasGroupBySourceId = function(sourceId) {
  var source = this.getSources().find(source => source.id === sourceId)
  return this.getBiasGroups().find(biasGroup => biasGroup.id === source.biasGroupId)
};

exports.getSourcesByBiasGroupId = function(biasGroupId) {
  return this.getSources().filter(source => source.biasGroupId === biasGroupId);
};