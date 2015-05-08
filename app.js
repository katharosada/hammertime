
var myApp = angular.module("hammertime", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://ygbcnjyw3s8.firebaseio-demo.com/");
    $scope.messages = $firebaseArray(ref);
    var students = new Firebase("https://flickering-fire-2155.firebaseio.com/students");
    $scope.students = $firebaseArray(students);
    var questions = new Firebase("https://flickering-fire-2155.firebaseio.com/questions");
    $scope.questions = $firebaseArray(questions);

    var AmyTest = new Firebase("https://flickering-fire-2155.firebaseio.com/AmyTest");
    console.log(AmyTest);
    $scope.AmyTest = $firebaseArray(AmyTest);


/*

var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});

*/
    $scope.answer="";
$scope.submit = function(id) {

	 AmyTest.set({
  0: {
    question: "What is your favourite colour",
    right_answer: "Green",
    answers:{},
    open:true,
    type:"text"
  },
  1: {
    question: "What is your favourite Flavour",
    right_answer: "Green",
    answers:{},
    open:true,
    type:"text"
  }
});
}


  }
]);

myApp.controller("TeacherController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://ygbcnjyw3s8.firebaseio-demo.com/");
    $scope.messages = $firebaseArray(ref);
    var students = new Firebase("https://flickering-fire-2155.firebaseio.com/students");
    $scope.students = $firebaseArray(students);
    var questions = new Firebase("https://flickering-fire-2155.firebaseio.com/questions");
    $scope.questions = $firebaseArray(questions);
    $scope.current_question = null;

    $scope.set_current_question = function(key) {
      $scope.current_question = key;
      console.log(key);
    };

    $scope.open_question = function(key) {
      //var question = $scope.questions[key].update({'open': true});
      var question = new Firebase("https://flickering-fire-2155.firebaseio.com/questions/" + key);
      question.update({'open': true});

      console.log($scope.questions[key]);
      console.log('called');
    };

    $scope.get_answer = function(student_id) {
      console.log("student id: " + student_id);
      var answers = $scope.questions[$scope.current_question].answers;
      for (var key in answers) {
        if (answers.hasOwnProperty(key)) {
          console.log(answers[key]);
          if (answers[key].student_id === student_id) {
            return answers[key].answer;
          }
        }
      }
      return "No answer";
    };

  }
]);



