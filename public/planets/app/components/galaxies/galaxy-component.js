; (function () {

  angular.module('da-planets')
    .component('galaxy', {
      template: `
        This is your Galaxy {{$ctrl.galaxy}} {{gc.error}}

        Total Planets: {{$ctrl.galaxy.planets.length}}
        <ul>
          <li ng-repeat="planet in $ctrl.galaxy.planets">{{planet.name}}</li>
        </ul>
      
      `,
      controller: GalaxyController
    })

  function GalaxyController($stateParams, DataStore) {
    var gc = this
    DataStore.Planet.findAll({ where: { galaxyId: $stateParams.id } }).then(function (planets) {
      DataStore.Galaxy.find($stateParams.id).then(function (galaxy) {
        if (!galaxy) {
          gc.error = 'BAD ID DUDE'
        }
        console.log(gc.planets) 
        gc.galaxy = galaxy

      })
    })
  }

} ());

