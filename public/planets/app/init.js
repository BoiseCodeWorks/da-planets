;(function(){

  angular.module('da-planets', [])
    .component('universe', {
      template: `hello <button ng-click="$ctrl.loadStuff()">click me please</button>
        <div ng-repeat="g in $ctrl.galaxies">
          <p>{{g.name}}</p>
        </div>
      `,
      controller: UniverseController
    })

    function UniverseController($http) {
      let $ctrl = this;
      this.loadStuff = function() {
        $http.get('/api/galaxies').then(function(res){
          $ctrl.galaxies = res.data
        })
      }
    }

}());