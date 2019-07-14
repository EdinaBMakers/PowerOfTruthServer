exports.successfulNewsApiResponseWithZeroArticles = {
  status: "ok",
  totalResults: 0,
  articles: []
};

exports.successfulResponseWithZeroArticle = {
  status: "ok",
  totalResults: 0,
  provider: "PowerOfTruth Server",
  articles: []
};

exports.successfullNewsApiResponseWithMultipleArticles = {
  status: "ok",
  totalResults: 2,
  articles: [{
    source: {
      id: "daily-mail",
      name: "Daily Mail"
    },
    author: null,
    title: "The housekeeper who faces losing home in legal battle with James Dyson",
    description: "Sir James Dyson controversially relocated his company's headquarters to Singapore earlier this year, despite being a vociferous advocate of Brexit.",
    url: "https://www.dailymail.co.uk/news/article-7242583/The-loyal-housekeeper-faces-losing-home-legal-battle-James-Dyson.html",
    urlToImage: "https://i.dailymail.co.uk/1s/2019/07/12/23/15984174-0-image-a-5_1562971241648.jpg",
    publishedAt: "2019-07-13T13:12:36+00:00",
    content: "With its breathtaking views across Singapore's Marina Bay not to mention five bedrooms, a swimming pool and an eye-watering £43million price tag, Sir James Dyson's new home-from-home in Asia is a lavish affair indeed.\r\nThe billionaire inventor controversially… [+15480 chars]"
  },
  {
    source: {
      id: "independent",
      name: "Independent"
    },
    author: "Andrew Woodcock",
    title: "Tory leadership: Voters nearly 20 times more likely to describe Boris Johnson as 'buffoon' than 'statesman'",
    description: "The Conservative leadership frontrunner sticks to his line on trade after no-deal Brexit, despite a torrid grilling by Andrew Neil",
    url: "http://www.independent.co.uk/news/uk/politics/tory-leadership-boris-johnson-poll-uk-prime-minister-jeremy-hunt-brexit-a9003486.html",
    urlToImage: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/11/11/07707244.jpg",
    publishedAt: "2019-07-13T13:04:00Z",
    content: "More voters view Boris Johnson as a buffoon than a statesman, a new poll has found.\r\nAnd the survey found that only one in five believe that he can get a better Brexit deal than Theresa May and fewer than two in five think he will deliver on his promise to ta… [+5881 chars]"
  }]
};

exports.successfulResponseWithMultipleArticles = {
  status: "ok",
  totalResults: 2,
  provider: "PowerOfTruth Server",
  articles: [{
    source: {
      id: "daily-mail",
      name: "Daily Mail"
    },
    author: null,
    title: "The housekeeper who faces losing home in legal battle with James Dyson",
    description: "Sir James Dyson controversially relocated his company's headquarters to Singapore earlier this year, despite being a vociferous advocate of Brexit.",
    url: "https://www.dailymail.co.uk/news/article-7242583/The-loyal-housekeeper-faces-losing-home-legal-battle-James-Dyson.html",
    urlToImage: "https://i.dailymail.co.uk/1s/2019/07/12/23/15984174-0-image-a-5_1562971241648.jpg",
    publishedAt: "2019-07-13T13:12:36+00:00",
    content: "With its breathtaking views across Singapore's Marina Bay not to mention five bedrooms, a swimming pool and an eye-watering £43million price tag, Sir James Dyson's new home-from-home in Asia is a lavish affair indeed.\r\nThe billionaire inventor controversially… [+15480 chars]",
    politicalBias: "right"
  },
  {
    source: {
      id: "independent",
      name: "Independent"
    },
    author: "Andrew Woodcock",
    title: "Tory leadership: Voters nearly 20 times more likely to describe Boris Johnson as 'buffoon' than 'statesman'",
    description: "The Conservative leadership frontrunner sticks to his line on trade after no-deal Brexit, despite a torrid grilling by Andrew Neil",
    url: "http://www.independent.co.uk/news/uk/politics/tory-leadership-boris-johnson-poll-uk-prime-minister-jeremy-hunt-brexit-a9003486.html",
    urlToImage: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/11/11/07707244.jpg",
    publishedAt: "2019-07-13T13:04:00Z",
    content: "More voters view Boris Johnson as a buffoon than a statesman, a new poll has found.\r\nAnd the survey found that only one in five believe that he can get a better Brexit deal than Theresa May and fewer than two in five think he will deliver on his promise to ta… [+5881 chars]",
    politicalBias:"left-center"
  }]
};
