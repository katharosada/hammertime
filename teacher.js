myApp.controller("TeacherController", ["$scope", "$firebaseObject", "$firebaseArray",
  function($scope, $firebaseObject, $firebaseArray) {
    var ref = new Firebase("https://flickering-fire-2155.firebaseio.com/extra");
    $scope.extra_obj = $firebaseObject(ref);
    $scope.extra_obj.$bindTo($scope, "extra");
    var students = new Firebase("https://flickering-fire-2155.firebaseio.com/students");
    $scope.students = $firebaseObject(students);
    var questions = new Firebase("https://flickering-fire-2155.firebaseio.com/questions");
    //$scope.questions = $firebaseArray(questions);

    $scope.questions2 = $firebaseObject(questions);
    $scope.questions2.$bindTo($scope, "questions");

    $scope.set_current_question = function(key) {
      if (key === $scope.current_question) {
        $scope.current_question = null;
        return;
      }
      $scope.current_question = key;
    };

    $scope.new_question = function() {
      var max = $scope.extra.question_max;
      $scope.extra.question_max += 1;
      var question = new Firebase("https://flickering-fire-2155.firebaseio.com/questions/" + max);
      question.set({
        "question": "NEW",
        "correct_answer": "",
        "open": false,
        "type": "text"
      });
      $scope.current_question = '' + max;
    };

    $scope.close_all_question = function() {
      $scope.current_question = null;
    };


    $scope.open_question = function(key) {
      //var question = $scope.questions[key].update({'open': true});
      var question = new Firebase("https://flickering-fire-2155.firebaseio.com/questions/" + key);
      question.update({'open': true});
    };


    $scope.close_question = function(key) {
      //var question = $scope.questions[key].update({'open': true});
      var question = new Firebase("https://flickering-fire-2155.firebaseio.com/questions/" + key);
      question.update({'open': false});
    };

    $scope.get_answer = function(student_id) {
      var view_question = $scope.get_viewquestion();
      var answers = $scope.questions[view_question].answers;
      for (var key in answers) {
        if (answers.hasOwnProperty(key) && answers[key] != null) {
          if (answers[key].student_id == student_id) {
            return answers[key].answer;
          }
        }
      }
      return "No answer";
    };

    $scope.get_viewquestion = function() {
      var open = $scope.get_openquestion();
      if (open) {
        return open;
      }
      return $scope.current_question;
    };

    $scope.get_openquestion = function() {
      var questions = $scope.questions;
      for (var key in questions){
          if (questions.hasOwnProperty(key) && questions[key] != null) {
              if (questions[key].open) {
                return key;
              }
           }
      }
      return null;
    };


    $scope.get_CorrectAnswers = function() {
      var openKey = $scope.get_viewquestion();
      var arr = [];
      if (!$scope.questions[openKey]) {
        return 0;
      }
      var correctAnswer = $scope.questions[openKey].correct_answer;
      var answers = $scope.questions[openKey].answers;
      var correctAnsNo = 0;
      var allAnswers = 0;
      for (var key in answers) {
        if (answers.hasOwnProperty(key) && answers[key].student_id) {
          if ($.inArray(answers[key].student_id, arr) == -1) {
             arr.push(answers[key].student_id);
             allAnswers ++;
             if (answers[key].answer == correctAnswer) {
                correctAnsNo ++;
             }
           }
        }
      }
      if (allAnswers !== 0) {
        return Math.ceil((100 * correctAnsNo) / allAnswers);
      } else {
       return 0;
      }

    };

  $scope.get_AllAnswers = function() {
      var openKey = $scope.get_viewquestion();
      var arrI = [];
      var arrII = [];

      if (!$scope.questions[openKey]) {
        return 0;
      }
      var answers = $scope.questions[openKey].answers;
      var students = $scope.students;
      var allAnswers = 0;
      var studentNo = 0;
      for (var key in answers) {
        if (answers.hasOwnProperty(key) && answers[key].student_id) {
            if ($.inArray(answers[key].student_id, arrI) == -1){
                 arrI.push(answers[key].student_id);
                 allAnswers ++;
            }
         }
      }
      for (var stud in students) {
        if (students.hasOwnProperty(stud) && typeof students[stud] == 'string' && students[stud] !== "students"){
          studentNo ++;
        }
      }
      if (studentNo !== 0)
        return Math.ceil((100 * allAnswers) / studentNo);
      else
       return 0;
   };

   $scope.get_AnswersForQuestion = function(question_id) {

      if (!$scope.questions[question_id]) {
        return 0;
      }
      var answers = $scope.questions[question_id].answers;
      var students = $scope.students;
      var allAnswers = 0;
      var studentNo = 0;
      for (var key in answers) {
        if (answers.hasOwnProperty(key)) {
          allAnswers ++;
         }
      }
      for (var stud in students) {
         if (students.hasOwnProperty(stud)){
             studentNo ++;
         }
      }
      if (studentNo != 0) {
        return Math.ceil((100 * allAnswers) / studentNo);
      } else {
        return 0;
      }
   };


  $scope.current_question = $scope.get_openquestion();
  }
]);

myApp.filter('orderQuestionBy', function(){
  return function(input) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
        if (input[objectKey] !== null && input[objectKey].question) {
          input[objectKey].key = objectKey;
          array.push(input[objectKey]);
        }
    }

    array.sort(function(a, b){
        a = parseInt(a.key);
        b = parseInt(b.key);
        return b - a;
    });
    return array;
  };
});
