; (function () {

  let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    routes = require('./server-assets/routes/index'),
    server = express(),
    port = process.env.PORT || 1582;

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  server.use('/', express.static(`${__dirname}/public/planets/`));
  server.use('/pizza', express.static(`${__dirname}/public/pizzas/`));

  var whitelist = ['http://localhost:8081', 'http://portal.boisecodeworks.com']; //
  var corsOptions = {
    origin: function (origin, callback) {
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
    }
  };

  server.use('/api', cors(corsOptions), routes.router)


  server.listen(port, function () {
    console.log(`Creating worlds on port: ${port}`);
  })



} ());