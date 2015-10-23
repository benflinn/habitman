'use strict';

/**
 * @ngdoc function
 * @name habitmanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the habitmanApp
 */
angular.module('habitmanApp')
    .controller('TrainCtrl', function($scope, userStats, sharedProperties) {

        //getting userData
        var user = userStats.getStats();
        var tips = sharedProperties.getTips();
        var problems = sharedProperties.getProblems();
        $scope.hpEarned = 0;

        var nextProblem = function() {
            //select problem category & two good problem hints
            var problemGroup = Math.floor(Math.random() * 5);
            var problemSymptom1 = Math.floor(Math.random() * 10);
            var problemSymptom2 = Math.floor(Math.random() * 10);
            while (problemSymptom1 == problemSymptom2) {
                var problemSymptom2 = Math.floor(Math.random() * 10);
            }

            //send problems to page
            $scope.symptom = problems[problemGroup][problemSymptom1];
            $scope.symptom2 = problems[problemGroup][problemSymptom2];

            //make array of random wrong answers
            var choices = [];
            var avoid = [];
            avoid.push(problemGroup);
            for (var x = 0; x < 4; x++) {
                var choice = Math.floor(Math.random() * 5);
                while (!(avoid.indexOf(choice) == -1)) {
                    var choice = Math.floor(Math.random() * 5);
                }
                var wrongTip = Math.floor(Math.random() * 10);
                choices.push(tips[choice][wrongTip]);
                avoid.push(choice);
            }

            //insert one correct answer in choices
            var replace = Math.floor(Math.random() * 4);
            var rightTip = Math.floor(Math.random() * 10);
            choices[replace] = tips[problemGroup][rightTip];

            function randWrong() {
                var choice = Math.floor(Math.random() * 5);
                while (choice == problemGroup) {
                    var choice = Math.floor(Math.random() * 5);
                }
            }

            $scope.choices = choices;
            $scope.response = function(index) {
                if (index == replace) {
                    user.habitpower++;
                    $scope.hpEarned++;
                    nextProblem();
                } else {
                	if (user.habitpower > 0) {
                		user.habitpower--;
                		$scope.hpEarned--;
                	}
                }
            }
        }
        nextProblem();

    });
