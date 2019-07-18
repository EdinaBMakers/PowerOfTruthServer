exports.successfulNewsApiResponseWithZeroArticle = {
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
    politicalBias: "Right-Wing"
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
    politicalBias:"Left-Center"
  }]
};

exports.successfullNewsApiResponseWithMultipleArticlesForLeftBiasGroup = {
  status: "ok",
  totalResults: 2,
  articles: [{
    source: {
      id: "cnn",
      name: "CNN"
    },
    author: "William Lopez and Nicole Novak",
    title: "For an immigrant, seeing a 'police car is something that makes me go cold'",
    description: "William Lopez and Nicole Novak write that ICE raids terrorize and traumatize not only arrested immigrants, but also their children, families and others in their communities, who are often left scrambling in the aftermath.",
    url: "http://us.cnn.com/2019/07/16/opinions/border-enforcement-ice-raids-lopez-novak/index.html",
    urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190714125803-ice-raid-phot-super-tease.jpg",
    publishedAt: "2019-07-16T11:06:38Z",
    content: "William Lopez is a clinical assistant professor at the University of Michigan School of Public Health and author of the book, \"Separated: Family and Community in the Aftermath of an Immigration Raid.\" Nicole Novak is an assistant research scientist at the Uni… [+5784 chars]"
  },
  {
    source: {
      id: "the-huffington-post",
      name: "The Huffington Post"
    },
    author: "Michael Hobbes",
    title: "Sex Offender Registries Don't Keep Kids Safe, But Politicians Keep Expanding Them Anyway",
    description: "Lawmakers are using \"stranger danger\" myths to keep almost a million Americans out of work and on the verge of homelessness.",
    url: "https://www.huffpost.com/entry/sex-offender-laws-dont-make-children-safer-politicians-keep-passing-them-anyway_n_5d2c8571e4b02a5a5d5e96d1",
    urlToImage: "https://img.huffingtonpost.com/asset/5d2cea2226000050000447fe.jpeg?cache=pqj2xVpP3c&ops=1200_630",
    publishedAt: "2019-07-16T09:45:01Z",
    content: "The first time Damian Winters got evicted was in 2015. He was living with his wife and two sons in suburban Nashville when his probation officer called his landlord and informed him that Winters was a registered sex offender.\r\nThe previous year, when he was 2… [+18629 chars]"
  }]
};

exports.successfulResponseWithMultipleArticlesForLeftBiasGroup = {
  status: "ok",
  totalResults: 2,
  provider: "PowerOfTruth Server",
  articles: [{
    source: {
      id: "cnn",
      name: "CNN"
    },
    author: "William Lopez and Nicole Novak",
    title: "For an immigrant, seeing a 'police car is something that makes me go cold'",
    description: "William Lopez and Nicole Novak write that ICE raids terrorize and traumatize not only arrested immigrants, but also their children, families and others in their communities, who are often left scrambling in the aftermath.",
    url: "http://us.cnn.com/2019/07/16/opinions/border-enforcement-ice-raids-lopez-novak/index.html",
    urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190714125803-ice-raid-phot-super-tease.jpg",
    publishedAt: "2019-07-16T11:06:38Z",
    content: "William Lopez is a clinical assistant professor at the University of Michigan School of Public Health and author of the book, \"Separated: Family and Community in the Aftermath of an Immigration Raid.\" Nicole Novak is an assistant research scientist at the Uni… [+5784 chars]",
    politicalBias: "Left-Wing"
  },
  {
    source: {
      id: "the-huffington-post",
      name: "The Huffington Post"
    },
    author: "Michael Hobbes",
    title: "Sex Offender Registries Don't Keep Kids Safe, But Politicians Keep Expanding Them Anyway",
    description: "Lawmakers are using \"stranger danger\" myths to keep almost a million Americans out of work and on the verge of homelessness.",
    url: "https://www.huffpost.com/entry/sex-offender-laws-dont-make-children-safer-politicians-keep-passing-them-anyway_n_5d2c8571e4b02a5a5d5e96d1",
    urlToImage: "https://img.huffingtonpost.com/asset/5d2cea2226000050000447fe.jpeg?cache=pqj2xVpP3c&ops=1200_630",
    publishedAt: "2019-07-16T09:45:01Z",
    content: "The first time Damian Winters got evicted was in 2015. He was living with his wife and two sons in suburban Nashville when his probation officer called his landlord and informed him that Winters was a registered sex offender.\r\nThe previous year, when he was 2… [+18629 chars]",
    politicalBias: "Left-Wing"
  }]
};

exports.successfulNewsApiResponseForTopic = {
  status: "ok",
  totalResults: 2,
  articles: [{
    source: {
      id: "cnn",
      name: "CNN"
    },
    author: null,
    title: "Trump retweets fake Reagan quote about himself",
    description: "Trump tweets fake Ronald Reagan quote about ...Trump. CNN's Jeanne Moos reports.",
    url: "https://www.cnn.com/videos/politics/2019/07/09/jeanne-moos-trump-tweet-fake-reagan-quote-pkg-ebof-vpx.cnn",
    urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190708204541-reagan-trump-fake-tweet-super-tease.jpg",
    publishedAt: "2019-07-09T00:58:54Z",
    content: "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Trump orders tanks for Independence Day parade",
    description: "He promises a \"special\" event, but critics liken it to military parades by authoritarian regimes.",
    url: "https://www.bbc.co.uk/news/world-us-canada-48842428",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/73D3/production/_107715692_gettyimages-1159570665.jpg",
    publishedAt: "2019-07-02T15:27:09Z",
    content: "Image copyrightMark WilsonImage caption\r\n Two tanks and other military vehicles sit on guarded rail cars at a rail yard in Washington, DC on 2 July\r\nPresident Donald Trump's plans to host a military parade on US Independence Day this week have left critics se… [+4524 chars]"
  }]
};

exports.successfulResponseForTopic = {
  status: "ok",
  totalResults: 2,
  provider: "PowerOfTruth Server",
  articles: [{
    source: {
      id: "cnn",
      name: "CNN"
    },
    author: null,
    title: "Trump retweets fake Reagan quote about himself",
    description: "Trump tweets fake Ronald Reagan quote about ...Trump. CNN's Jeanne Moos reports.",
    url: "https://www.cnn.com/videos/politics/2019/07/09/jeanne-moos-trump-tweet-fake-reagan-quote-pkg-ebof-vpx.cnn",
    urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190708204541-reagan-trump-fake-tweet-super-tease.jpg",
    publishedAt: "2019-07-09T00:58:54Z",
    content: "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
    politicalBias: "Left-Wing"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Trump orders tanks for Independence Day parade",
    description: "He promises a \"special\" event, but critics liken it to military parades by authoritarian regimes.",
    url: "https://www.bbc.co.uk/news/world-us-canada-48842428",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/73D3/production/_107715692_gettyimages-1159570665.jpg",
    publishedAt: "2019-07-02T15:27:09Z",
    content: "Image copyrightMark WilsonImage caption\r\n Two tanks and other military vehicles sit on guarded rail cars at a rail yard in Washington, DC on 2 July\r\nPresident Donald Trump's plans to host a military parade on US Independence Day this week have left critics se… [+4524 chars]",
    politicalBias: "Left-Center"
  }]
};

exports.successfulGetBiasGroupsResponse = {
    status: "ok",
    totalResults: 5,
    provider: "PowerOfTruth Server",
    biasGroups: [
      {
        id: "left",
        name: "Left-Wing"
      }, 
      {
        id: "left-center",
        name: "Left-Center"
      },
      {
        id: "least-biased",
        name: "Least-Biased"
      },
      {
        id: "right-center",
        name: "Right-Center"
      },
      {
        id: "right",
        name: "Right-Wing"
      }]
};