var myApp = angular.module('myApp');

myApp.controller('StoreController', [
  '$scope',
  '$firebaseObject',
  function ($scope, $firebaseObject){
    var myDataRef = new Firebase('https://fiery-heat-4915.firebaseio.com/');

    var obj = $firebaseObject(myDataRef);

    obj.$bindTo($scope, "data").then(function (){
      console.log($scope.data);
      $scope.data.who = "User";
      $scope.data.points = 0;
    });

    $scope.addOnePoint = function (){
      var data = $scope.data;

      if (!data.points){
        data.points = 0;
      }
      data.points+=1;
    };

    $scope.addTwoPoints = function (){
      var data = $scope.data;

      if (!data.points){
        data.points = 0;
      }
      data.points+=2;
    };

    $scope.addThreePoints = function (){
      var data = $scope.data;

      if (!data.points){
        data.points = 0;
      }
      data.points+=3;
    };

    $scope.clearPoints = function (){
      var data = $scope.data;

      data.points = 0;
    };
  }
]);