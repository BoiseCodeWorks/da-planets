let uuid = require('node-uuid'),
  JsData = require('js-data'),
  Schemator = require('js-data-schema'),
  NeDbAdapter = require('js-data-nedb'),
  FBAdapter = require('js-data-firebase'),
  schemator = new Schemator(),
  DS = new JsData.DS();

let fbAdapter = new FBAdapter({
  basePath: 'https://da-planets.firebaseio.com/'
})


function formatQuery(query){
  query = query || ''
  return {
    with: query.split(',').join(' ').split(' ')
  }
}


DS.registerAdapter('firebase', fbAdapter, { default: true })




module.exports = {
  DS,
  uuid,
  schemator,
  formatQuery
}