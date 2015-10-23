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
        	if (user.habitpower > 0) {
            user.sleepSkill++;
            console.log(user.sleepSkill);
            user.habitpower--;
            $scope.habitpower = user.habitpower;
        }
        }

        $scope.upgradeexer = function() {
        	if (user.habitpower > 0) {
            user.exerSkill++;
            console.log(user.exerSkill);
            user.habitpower--;
            $scope.habitpower = user.habitpower;
        }

        $scope.upgradediet = function() {
        	if (user.habitpower > 0) {
            user.dietSkill++;
            console.log(user.dietSkill);
            user.habitpower--;
            $scope.habitpower = user.habitpower;
        }
        }

        $scope.upgradegoals = function() {
        	if (user.habitpower > 0) {
            user.goalSkill++;
            console.log(user.goalSkill);
            user.habitpower--;
            $scope.habitpower = user.habitpower;
        }
        }

        $scope.upgradedet = function() {
            if (user.habitpower > 0) {
                user.detSkill++;
                console.log(user.detSkill);
                user.habitpower--;
                $scope.habitpower = user.habitpower;
            }
        }

        }

    });
