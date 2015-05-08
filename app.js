
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
  }
]);



