var myApp = angular.module('myApp');

myApp.controller('StoreController', [
  '$scope',
  '$firebaseObject',
  function ($scope, $firebaseObject){
    var myDataRef = new Firebase('https://fiery-heat-4915.firebaseio.com/');

      $scope.data = $firebaseObject(myDataRef);
    var syncObject = $firebaseObject(myDataRef);

    syncObject.$bindTo($scope, "data");
  }
]);