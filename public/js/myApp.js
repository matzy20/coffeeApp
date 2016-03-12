angular.module('myApp', ['ngRoute', 'firebase']);

var myApp = angular.module('myApp');

myApp
  .config(function ($routeProvider){
    $routeProvider
    .when('/store', {
      templateUrl: '/index.html',
      controller: 'StoreController'
    });

  }).run([
    '$rootScope',
    function ($rootScope){
      console.log('connected to Store');
    }
  ]);
