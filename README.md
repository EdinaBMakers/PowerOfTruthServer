# PowerOfTruthServer

[![CircleCI](https://circleci.com/gh/EdinaBMakers/PowerOfTruthServer.svg?style=svg)](https://circleci.com/gh/EdinaBMakers/PowerOfTruthServer)

This is an API backend for a news mobile app. The frontend can be found [here](https://github.com/rayswilling/PowerOfTruth).

### Description
Power Of Truth Server is a simple HTTP REST API for searching and retrieving live articles from different news publishers with differnt political bias.  

### Getting Started
Power Of Truth Server is deployed at `https://power-of-truth-server.herokuapp.com/`

OR

To run the server on your local machine:
1. Clone this repo using `git@github.com:EdinaBMakers/news-summary-challenge.git`
2. To install dependencies: `npm install`
3. To run the server: npm run start 

### Endpoints
* Headlines: `/headlines` - returns breaking news headlines for multiple sources.
* Headlines by bias groups: `/headlines/bias/:biasGroupId` - returns breaking news headlines by bias groups
* Headlines by sources: `/headlines/source/:sourceI` - returns headlines from a news publisher
* Headlines by topic: `/headlines/topic/:topic` - returns headlines about a predefined topic from available news publishers
* Search: `/search` - returns headlines about a topic from available news publishers
* Bias Groups: `/biasGroups` - returns biasgroups list
* Topics: `/topics` - returns predefines topics list


### Testing

The PowerOfTruthServer has been tested and written in TDD, using Jest testing framework.
All files test coverge is 96,43%. To see the test result details run `yarn test --coverage`.

Based on the API key, the News API can be severely rate-limited, therefore the newsapi has been stubbed in the test suites.


### The foxy-news team:

Edina Bolkeny: EdinaBMakers bolkeny.edina@gmail.com   
Lisa McCormack: LisaMcCormack lisamccormack85@gmail.com   
Lucy Barber: lbarber729 lbarber729@hotmail.co.uk    
Michael Hughes: hughbric mhughes36@live.co.uk   
Ranen Swilling: rayswilling swillingray@gmail.com   
Sam Kitchen: samkitchen94 samkitchen94@gmail.com
