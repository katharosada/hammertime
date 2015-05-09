
var myApp = angular.module("hammertime", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",'$timeout',
  function($scope, $firebaseArray, $timeout) {
    var ref = new Firebase("https://ygbcnjyw3s8.firebaseio-demo.com/");
    $scope.messages = $firebaseArray(ref);
    var students = new Firebase("https://flickering-fire-2155.firebaseio.com/students");
    $scope.students = $firebaseArray(students);
    var questions = new Firebase("https://flickering-fire-2155.firebaseio.com/questions");
	$scope.questions = $firebaseArray(questions);
	var amyTest = new Firebase("https://flickering-fire-2155.firebaseio.com/AmyTest");
	$scope.questions = $firebaseArray(questions);
	
	

	$scope.student = {};
	$scope.nameMe = function () {
	 findId();
	 if($scope.student.id == null) {
		 console.log('empty!');
	 	students.push($scope.student.name);
		$timeout(findId,2000);
	  }
	}
	function findId() {
		for (var key in $scope.students) {
			if ($scope.students.hasOwnProperty(key)) {
			  if ($scope.students[key].$value === $scope.student.name) {
				//return answers[key].answer;
				console.log('found!');
				$scope.student.id = $scope.students[key].$id;
			  }
			}
      }
	}
	
	$scope.answers={};
    $scope.submit = function(id) {
	  var answers = new Firebase("https://flickering-fire-2155.firebaseio.com/questions/" + id + "/answers");
	  $scope.answers[id] = {'answer':$scope.answers[id], 'submitted':true};
	  answers.push({'student_id': $scope.student.id, 'answer':$scope.answers[id].answer});
	//  $scope.answer[id].submitted=true;
	}
  }
]);

