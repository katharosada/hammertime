
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
		if($scope.student.name){
			 findId();
			 if($scope.student.id == null) {
				students.push($scope.student.name);
				$timeout(findId,2000);
			  }
		}
	}
	function findId() {
		for (var key in $scope.students) {
			if ($scope.students.hasOwnProperty(key)) {
			  if ($scope.students[key].$value === $scope.student.name) {
				//return answers[key].answer;
				$scope.student.id = $scope.students[key].$id;
			  }
			}
      }
	}
	
	
	$scope.answers={};
    $scope.submit = function(id) {
		if($scope.answers[id]) {
			var answers = new Firebase("https://flickering-fire-2155.firebaseio.com/questions/" + id + "/answers");
			//tempAnswers = $firebaseArray(answers);
			  
			  
			  $scope.answers[id] = {'answer':$scope.answers[id], 'submitted':true};
		
			  for (var key in $scope.questions[id].answers) {
					if ($scope.questions[id].answers.hasOwnProperty(key)) {
					  if ($scope.questions[id].answers[key].student_id == $scope.student.id) {
						//return answers[key].answer;
						//$scope.student.id = $scope.students[key].$id;
						if(console) console.log('inside!');
						var inside = true;
					  }
					}
      			}	
			  if(!inside) {
				  if(console)console.log('dopush');
				  answers.push({'student_id': $scope.student.id, 'answer':$scope.answers[id].answer});
			  }
		}
	//  $scope.answer[id].submitted=true;
	}
  }
]);

