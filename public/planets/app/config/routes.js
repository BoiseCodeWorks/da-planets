;(function(){

  angular.module('da-planets')
    .config(function($urlRouterProvider, $stateProvider){

      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state({
          name: 'universe',
          url: '/',
          component: 'universe'
        })
        .state({
          name: 'galaxy',
          url: '/galaxy/:id',
          component: 'galaxy'
        })

    })

}());