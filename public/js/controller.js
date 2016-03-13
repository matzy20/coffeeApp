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
      //hack: made level prop of coffee, tricking comp
      $scope.coffee = {
        level: ""
      };
    });
    //Owner controls
    $scope.addOnePoint = function (){
      var data = $scope.data;

      if (!data.points){
        data.points = 0;
      }
      data.points+=1;
      setLevel();
    };

    $scope.addTwoPoints = function (){
      var data = $scope.data;

      if (!data.points){
        data.points = 0;
      }
      data.points+=2;
      setLevel();
    };

    $scope.addThreePoints = function (){
      var data = $scope.data;

      if (!data.points){
        data.points = 0;
      }
      data.points+=3;
      setLevel();
    };

    $scope.clearPoints = function (){
      var data = $scope.data;

      data.points = 0;
      setLevel();
    };
    //dynamically setting levels
    //speaks with CSS and HTML
    function setLevel () {
      var data = $scope.data;
      if(data.points === 1){
        $scope.coffee.level = 'one';
      }
      if(data.points === 2){
        $scope.coffee.level = 'two';
      }
      if(data.points === 3){
        $scope.coffee.level = 'three';
      }
      if(data.points === 4){
        $scope.coffee.level = 'four';
      }
      if(data.points === 5){
        $scope.coffee.level = 'five';
      }
      if(data.points === 0){
        $scope.coffee.level = 'zero';
      }
      if(data.points > 5){
        alert('Maximum points have been reached .. Please see Owner');
        $scope.coffee.level = data.points;
      }
      console.log($scope.coffee.level);
    }

  }
]);