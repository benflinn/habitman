'use strict';

/**
 * @ngdoc function
 * @name habitmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the habitmanApp
 */
angular.module('habitmanApp')
    .controller('MainCtrl', function($scope, sharedProperties) {
        //grabbing titles from the service
    var titles = sharedProperties.getTitles();
//setting initial vars
    var sleep = 20, exercise = 20, diet = 20, goals = 20, determination = 30;
    var stress = 0;
    var sleepSkill = 20, exerSkill = 20, dietSkill = 20, goalSkill = 20, detSkill = 20;
    var prod = 20;
    var joblevel = 0;
    var wage = 7.5;
    //defining the vars for the scope
    $scope.habitpower = 10;
    $scope.jobtitle = titles[joblevel];
    $scope.age = 14;
    $scope.weeklyHours = 40;
    $scope.hourlyWage = wage;
    $scope.lifeSavings = 1;
    //functions to give values to the progress bars
    $scope.prodStatus = function() {
    	if (prod > 100) {
    		prod = 0;
    		joblevel++;
    		$scope.jobtitle = titles[joblevel];
    		wage = Math.round(100*(wage + wage * .05))/100;
    		$scope.hourlyWage = wage;
            stress++;
    	}
    	if (prod < 0) {
    		prod = 0;
    	}
     return "width: " + prod + "%;";
    };
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
    //buttons to raise the habit progress bars
    $scope.nap = function() {
        sleep += sleepSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.walk = function() {
        exercise += exerSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.snack = function() {
        diet += dietSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.plan = function() {
        goals += goalSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.focus = function() {
        determination += detSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.rotateHours = function() {
        $scope.weeklyHours += 20;
        if ($scope.weeklyHours > 110) {
            $scope.weeklyHours = 20;
        }
    }
    //function for each half second update
    var oneSecond = function() {
        $scope.lifeSavings = Math.round($scope.lifeSavings + $scope.hourlyWage * $scope.weeklyHours / 8.3);
        $scope.age = Math.round(10000 * ($scope.age + .0024)) / 10000;
        $scope.sleepPercent = $scope.sleepPercent + 1;
        //add variance & add stress
        sleep = sleep + 2 - 4*Math.random() - stress * $scope.weeklyHours / 100  + sleepSkill / 20;
        determination = determination + 2 - 4*Math.random() - stress * $scope.weeklyHours / 100  + detSkill / 20;
        diet = diet + 2 - 4*Math.random() - stress * $scope.weeklyHours / 100  + dietSkill / 20;
        exercise = exercise + 2  - 4*Math.random() - stress * $scope.weeklyHours / 100  + exerSkill / 20;
        goals = goals + 2  - 4*Math.random() - stress * $scope.weeklyHours / 100 + goalSkill / 20;
        //calculate productivity
        prod = prod + sleep / 100 + diet / 100 + exercise / 100 + determination / 100 + goals / 100 - 2.5;
        $scope.$apply();
    }
    //starting the update cycle
    setInterval(function() {
        oneSecond();
    }, 500);
});
