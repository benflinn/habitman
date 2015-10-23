'use strict';

/**
 * @ngdoc function
 * @name habitmanApp.controller:UpgradeCtrl
 * @description
 * # UpgradeCtrl
 * Controller of the habitmanApp
 */
angular.module('habitmanApp')
    .controller('UpgradeCtrl', function($scope, userStats, sharedProperties) {

        //getting userData
        var user = userStats.getStats();
        var tips = sharedProperties.getTips();

        $scope.habitpower = user.habitpower;

        $scope.sleepSkill = user.sleepSkill;
        $scope.exerSkill = user.exerSkill;
        $scope.dietSkill = user.dietSkill;
        $scope.goalSkill = user.goalSkill;
        $scope.detSkill = user.detSkill;

        $scope.prevsleeplabel = tips[0][user.sleepSkill - 1];
        $scope.sleeplabel = tips[0][user.sleepSkill];
        $scope.prevexerlabel = tips[1][user.exerSkill - 1];
        $scope.exerlabel = tips[1][user.exerSkill];
        $scope.prevdietlabel = tips[2][user.dietSkill - 1];
        $scope.dietlabel = tips[2][user.dietSkill];
        $scope.prevgoalslabel = tips[3][user.goalSkill - 1];
        $scope.goalslabel = tips[3][user.goalSkill];
        $scope.prevdetlabel = tips[4][user.detSkill - 1];
        $scope.detlabel = tips[4][user.detSkill];

        $scope.upgradesleep = function() {
            if (user.habitpower > 0 && user.sleepSkill < 10) {
                user.sleepSkill++;
                console.log(user.sleepSkill);
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.sleepSkill = user.sleepSkill;
                $scope.prevsleeplabel = tips[0][user.sleepSkill - 1];
                $scope.sleeplabel = tips[0][user.sleepSkill];

            }
        };

        $scope.upgradeexer = function() {
            if (user.habitpower > 0 && user.exerSkill < 10) {
                user.exerSkill++;
                console.log(user.exerSkill);
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.exerSkill = user.exerSkill;
                $scope.prevexerlabel = tips[1][user.exerSkill - 1];
                $scope.exerlabel = tips[1][user.exerSkill];
            }
        };

        $scope.upgradediet = function() {
            if (user.habitpower > 0 && user.dietSkill < 10) {
                user.dietSkill++;
                console.log(user.dietSkill);
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.dietSkill = user.dietSkill;
                $scope.prevdietlabel = tips[2][user.dietSkill - 1];
                $scope.dietlabel = tips[2][user.dietSkill];
            }
        };

        $scope.upgradegoals = function() {
            if (user.habitpower > 0 && user.goalSkill < 10) {
                user.goalSkill++;
                console.log(user.goalSkill);
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.goalSkill = user.goalSkill;
                $scope.prevgoalslabel = tips[3][user.goalSkill - 1];
                $scope.goalslabel = tips[3][user.goalSkill];
            }

        };

        $scope.upgradedet = function() {
            if (user.habitpower > 0 && user.detSkill < 10) {
                user.detSkill++;
                console.log(user.detSkill);
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.detSkill = user.detSkill;
                $scope.prevdetlabel = tips[4][user.detSkill - 1];
                $scope.detlabel = tips[4][user.detSkill];
            }
        };

    });
