; (function () {

  let uuid = require('node-uuid'),
    JsData = require('js-data'),
    Schemator = require('js-data-schema'),
    NeDbAdapter = require('js-data-nedb'),
    schemator = new Schemator(),
    DS = new JsData.DS();

  DS.registerAdapter('nedb', NeDbAdapter, { default: true })

  module.exports = {
    DS,
    uuid,
    schemator
  }


} ());