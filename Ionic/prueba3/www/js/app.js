angular.module('navegacion', ['ionic'])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'template/main.html'
    });
    $stateProvider.state('info', {
      url: '/info',
      templateUrl: 'template/info.html'
    });
  })

  .controller('principal', function() {
    console.log("hola");
});