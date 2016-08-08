; (function () {

  let uuid = require('node-uuid'),
    JsData = require('js-data'),
    Schemator = require('js-data-schema'),
    NEDBAdapter = require('js-data-nedb'),
		FirebaseAdapter = require('js-data-firebase'),
    NedbAadapter = new NEDBAdapter(),
		FbAdapter = new FirebaseAdapter({
			basePath: 'https://da-planets.firebaseio.com/'
		}),
    schemator = new Schemator(),
    DS = new JsData.DS();

  DS.registerAdapter('firebase', FbAdapter, { default: true })

  module.exports = {
    DS,
    uuid,
    schemator
  }


} ());