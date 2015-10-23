'use strict';

/**
 * @ngdoc function
 * @name habitmanApp.controller:UpgradeCtrl
 * @description
 * # UpgradeCtrl
 * Controller of the habitmanApp
 */
angular.module('habitmanApp')
    .controller('UpgradeCtrl', function($scope, userStats) {

        //getting userData
        var user = userStats.getStats();

        $scope.habitpower = user.habitpower;

        $scope.upgradesleep = function() {
        	user.sleepSkill++;
        	console.log(user.sleepSkill);
        }

        $scope.upgradeexer = function() {
        	user.exerSkill++;
        	console.log(user.exerSkill);
        }

        $scope.upgradediet = function() {
        	user.dietSkill++;
        	console.log(user.dietSkill);
        }

        $scope.upgradegoals = function() {
        	user.goalSkill++;
        	console.log(user.goalSkill);
        }

        $scope.upgradedet = function() {
        	user.detSkill++;
        	console.log(user.detSkill);
        }

    });
