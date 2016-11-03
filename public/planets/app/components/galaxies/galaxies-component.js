; (function () {

  angular.module('da-planets')
    .component('universe', {
      template: `hello <button ng-click="$ctrl.loadStuff()">click me please</button>
        <div ng-repeat="g in $ctrl.galaxies">
          <a ui-sref="galaxy({id: g.id})">{{g.name}}</a>
        </div>
      `,
      controller: UniverseController
    })

  function UniverseController(DataStore) {
    let $ctrl = this;
    this.loadStuff = function () {
      DataStore.Galaxy.findAll({}).then(function (galaxies) {
        $ctrl.galaxies = galaxies
      })
    }
  }

} ());