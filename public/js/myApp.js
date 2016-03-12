angular.module('myApp', ['ngRoute', 'firebase']);

var myApp = angular.module('myApp');

myApp
  .config(function ($routeProvider){


  }).run([
    '$rootScope',
    function ($rootScope){
      console.log('connected to Store');
    }
  ]);
