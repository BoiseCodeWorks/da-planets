; (function () {

  let uuid = require('node-uuid'),
    JsData = require('js-data'),
    Schemator = require('js-data-schema'),
    NeDbAdapter = require('js-data-nedb'),
    FirebaseAdapter = require('js-data-firebase'),
    fbAdapter = new FirebaseAdapter({
      basePath: process.env.DBCONNECTION || 'https://da-planets.firebaseio.com/'
    }),
    schemator = new Schemator(),
    DS = new JsData.DS();

  DS.registerAdapter('firebase', fbAdapter, { default: true })

  module.exports = {
    DS,
    uuid,
    schemator
  }


} ());