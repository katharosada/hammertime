
var myApp = angular.module("hammertime", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://ygbcnjyw3s8.firebaseio-demo.com/");
    $scope.messages = $firebaseArray(ref);
  }
]);



