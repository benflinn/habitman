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
        $scope.sleepPercent = function() {
        	return "width: 20%";
        };
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
            $scope.$apply();
        }
        setInterval(function() {
            oneSecond();
        }, 500);
    });
