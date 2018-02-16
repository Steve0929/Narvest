# Narvest
<img src ="https://img.shields.io/badge/created-February%202018-ff69b4.svg"/>
<img src="https://github.com/Steve0929/Narvest/blob/master/public/fruits/fruit.png" width="150" height="150" />

Narvest is a platform that displays information on the daily price of a series of fruits in Colombia. The information is retrieved by using a web scraper which extracts the prices from [Corabastos] (the Colombian organization that manages the agricultural market).


### Tech

* [cheerio] - Used for Web scraping and getting the prices of the products.
* [node.js] - Backend Server.
* [Express] - node.js network app framework.
* [request] - Used to make http/https calls.
 
### Installation

Narvest requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and run fruit.js

```sh
$ npm install 
$ node fruit.js
```








[node.js]: <http://nodejs.org>
[Bootstrap]: <http://twitter.github.com/bootstrap/>
[jQuery]: <http://jquery.com>
[express]: <http://expressjs.com>
[cheerio]: <https://github.com/cheeriojs/cheerio>
[request]: <https://github.com/request/request>
[corabastos]: <http://www.corabastos.com.co/sitio/historicoApp2/reportes/index.php>
