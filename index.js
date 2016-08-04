;(function(){

  let express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./server-assets/routes/index'),
    server = express(),
    port = process.env.PORT || 1582;

    server.use('/',express.static(`${__dirname}/public/planets/`));
    server.use('/pizza',express.static(`${__dirname}/public/pizzas/`));
    server.use('/api', routes.router)

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({extended: true}))

    server.listen(port, function(){
      console.log(`Creating worlds on port: ${port}`);
    })



}());