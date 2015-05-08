
var myApp = angular.module("hammertime", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://ygbcnjyw3s8.firebaseio-demo.com/");
    $scope.messages = $firebaseArray(ref);
    var students = new Firebase("https://flickering-fire-2155.firebaseio.com/students");
    $scope.students = $firebaseArray(students);
    var questions = new Firebase("https://flickering-fire-2155.firebaseio.com/questions");
	$scope.questions = $firebaseArray(questions);
	
	var studentID = 2;

	$scope.answer={};
    $scope.submit = function(id) {
	  var answers = new Firebase("https://flickering-fire-2155.firebaseio.com/questions/" + id + "/answers");
	 // answers.push({'student_id': studentID, 'answer':$scope.answer[id]});
	  $scope.answer[id].submitted=true;
	}
  }
]);

