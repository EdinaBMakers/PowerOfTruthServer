# Power of Truth Server

[![CircleCI](https://circleci.com/gh/EdinaBMakers/PowerOfTruthServer.svg?style=svg)](https://circleci.com/gh/EdinaBMakers/PowerOfTruthServer)

The news API backend for the [Power of Truth](https://github.com/rayswilling/PowerOfTruth) mobile application.

### Description
The Power Of Truth Server is a simple HTTP REST API for searching and retrieving live articles from different news publishers with different political bias. 

### Getting Started
The Power Of Truth Server is deployed on [Heroku](https://power-of-truth-server.herokuapp.com/).

OR

To run the server on your local machine:
1. Clone this repo using `git@github.com:EdinaBMakers/news-summary-challenge.git`
2. To install dependencies: `npm install`
3. To run the server: `npm run start` 

### Endpoints
* Headlines: `/headlines` - returns breaking news headlines from multiple sources.
* Headlines by bias group: `/headlines/bias/:biasGroupId` - returns breaking news headlines with the given political bias
* Headlines by source: `/headlines/source/:sourceId` - returns headlines from the given news publisher
* Headlines by topic: `/headlines/topic/:topic` - returns headlines with the given topic
* Search: `/search?q=search_criteria` - returns headlines from available news publishers that meet the given search criteria
* Bias Groups: `/biasGroups` - returns a list of pre-defined bias groups
* Topics: `/topics` - returns a list of pre-defined topics


### Testing

The Power Of Truth Server has been written in TDD and tested using the Jest testing framework with a test coverge of 96,43%. To see the test result details run `yarn test --coverage`.

Based on the API key, the News API can be severely rate-limited, therefore the newsapi has been stubbed in the test suites.


### The foxy-news team:

Edina Bolkeny: EdinaBMakers bolkeny.edina@gmail.com   
Lisa McCormack: LisaMcCormack lisamccormack85@gmail.com   
Lucy Barber: lbarber729 lbarber729@hotmail.co.uk    
Michael Hughes: hughbric mhughes36@live.co.uk   
Ranen Swilling: rayswilling swillingray@gmail.com   
Sam Kitchen: samkitchen94 samkitchen94@gmail.com
