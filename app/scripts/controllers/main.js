'use strict';

/**
 * @ngdoc function
 * @name habitmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the habitmanApp
 */
angular.module('habitmanApp')
    .controller('MainCtrl', function($scope) {
        var sleep = 20, exercise = 20, diet = 20, goals = 20, determination = 30;
        var sleepSkill = 10, exerSkill = 10, dietSkill = 10, goalSkill = 10, detSkill = 10;
        $scope.sleepStatus = function() {
        	if (sleep > 100) {
        		sleep = 100;
        	}
        	if (sleep < 0) {
        		sleep = 0;
        	}
        	if (sleep > 50) {
        		$scope.sleepImage = 'sleep.png';
        	} else {
        		$scope.sleepImage = 'nosleep.png';
        	}
         return "width: " + sleep + "%;";
        };
        $scope.exerStatus = function() {
        	if (exercise > 100) {
        		exercise = 100;
        	}
        	if (exercise < 0) {
        		exercise = 0;
        	}
        	if (exercise > 50) {
        		$scope.exerImage = 'exer.png';
        	} else {
        		$scope.exerImage = 'noexer.png';
        	}

            return "width: " + exercise + "%;";
        };
        $scope.dietStatus = function() {
        	if (diet > 100) {
        		diet = 100;
        	}
        	if (diet < 0) {
        		diet = 0;
        	}
        	if (diet > 50) {
        		$scope.dietImage = 'diet.png';
        	} else {
        		$scope.dietImage = 'nodiet.png';
        	}

            return "width: " + diet + "%;";
        };
        $scope.goalStatus = function() {
        	if (goals > 100) {
        		goals = 100;
        	}
        	if (goals < 0) {
        		goals = 0;
        	}
        	if (goals > 50) {
        		$scope.goalImage = 'goals.png';
        	} else {
        		$scope.goalImage = 'nogoals.png';
        	}
            return "width: " + goals + "%;";
        };
        $scope.detStatus = function() {
        	if (determination > 100) {
        		determination = 100;
        	}
        	if (determination < 0) {
        		determination = 0;
        	}
        	if (determination > 50) {
        		$scope.detImage = 'determine.png';
        	} else {
        		$scope.detImage = 'nodetermine.png';
        	}
            return "width: " + determination + "%;";
        };
        $scope.nap = function() {
            sleep += sleepSkill;
        }
        $scope.walk = function() {
            exercise += exerSkill;
        }
        $scope.snack = function() {
            diet += dietSkill;
        }
        $scope.plan = function() {
            goals += goalSkill;
        }
        $scope.focus = function() {
            determination += detSkill;
        }

        $scope.age = 14;
        $scope.weeklyHours = 40;
        $scope.hourlyWage = 7.50;
        $scope.lifeSavings = 1;
        $scope.rotateHours = function() {
            $scope.weeklyHours += 20;
            if ($scope.weeklyHours > 110) {
                $scope.weeklyHours = 20;
            }
        }
        var oneSecond = function() {
            $scope.lifeSavings = Math.round($scope.lifeSavings + $scope.hourlyWage * $scope.weeklyHours / 8.3);
            $scope.age = Math.round(10000 * ($scope.age + .0024)) / 10000;
            $scope.sleepPercent = $scope.sleepPercent + 1;
    //        sleep = sleep + 6 * Math.random() - 3;
            $scope.$apply();
        }
        setInterval(function() {
            oneSecond();
        }, 500);
    });
