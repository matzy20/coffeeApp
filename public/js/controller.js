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


    // $scope.addPoints = function (data) {
    //   console.log($scope.data.value);
    //   if (!$scope.data.value){
    //     myDataRef.set(0);
    //   }
    //   myDataRef.set($scope.data.value + 1);
    //   console.log($scope.data.value);
    // };
  }
]);