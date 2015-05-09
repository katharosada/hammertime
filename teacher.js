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
      if (key === $scope.current_question) {
        $scope.current_question = null;
        return;
      }
      $scope.current_question = key;
    };



    $scope.close_all_question = function() {
      $scope.current_question = null;
      console.log(key);
    };


    $scope.open_question = function(key) {
      //var question = $scope.questions[key].update({'open': true});
      var question = new Firebase("https://flickering-fire-2155.firebaseio.com/questions/" + key);
      question.update({'open': true});

      console.log($scope.questions[key]);
      console.log('called');
    };




    $scope.close_question = function(key) {
      //var question = $scope.questions[key].update({'open': true});
      var question = new Firebase("https://flickering-fire-2155.firebaseio.com/questions/" + key);
      question.update({'open': false});

      console.log($scope.questions[key]);
      console.log('called');
    };

    $scope.get_answer = function(student_id) {
      console.log("student id: " + student_id);
      var answers = $scope.questions[$scope.current_question].answers;
      for (var key in answers) {
        if (answers.hasOwnProperty(key)) {
          console.log(answers[key]);
          if (answers[key].student_id == student_id) {
            return answers[key].answer;
          }
        }
      }
      return "No answer";
    };


    $scope.get_openquestion = function() {
      var questions = $scope.questions;
      for (var key in questions){
          if (questions[key].open)
            return key;		
       }
    };


    $scope.get_CorrectAnswers = function() {
      var openKey = $scope.get_openquestion();
      var correctAnswer = $scope.questions[openKey].correct_answer; 
      var answers = $scope.questions[openKey].answers;
      var correctAnsNo = 0; 
      var allAnswers = 0;
      for (var key in answers) {
        allAnswers ++;
	if (answers[key].answer == correctAnswer){
    	  correctAnsNo ++;
        }
      }
      if (allAnswers != 0) 
        return (100 * correctAnsNo) / allAnswers;
      else
       return 0; 

    };



  }
]);
