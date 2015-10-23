'use strict';

/**
 * @ngdoc function
 * @name habitmanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the habitmanApp
 */
angular.module('habitmanApp')
    .controller('TrainCtrl', function($scope, userStats) {

        //getting userData
        var user = userStats.getStats();

        $scope.habitpowercheat = function() {
        	user.habitpower += 100;
        }

    });
