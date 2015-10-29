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
        var nextTierlevel = 29;

        $scope.habitpower = user.habitpower;

        $scope.sleepSkill = user.sleepSkill;
        $scope.exerSkill = user.exerSkill;
        $scope.dietSkill = user.dietSkill;
        $scope.goalSkill = user.goalSkill;
        $scope.detSkill = user.detSkill;

        $scope.prevsleeplabel = tips[0][user.sleepSkill % 10 - 1];
        $scope.sleeplabel = tips[0][user.sleepSkill % 10];
        $scope.prevexerlabel = tips[1][user.exerSkill % 10 - 1];
        $scope.exerlabel = tips[1][user.exerSkill % 10];
        $scope.prevdietlabel = tips[2][user.dietSkill % 10 - 1];
        $scope.dietlabel = tips[2][user.dietSkill % 10];
        $scope.prevgoalslabel = tips[3][user.goalSkill % 10 - 1];
        $scope.goalslabel = tips[3][user.goalSkill % 10];
        $scope.prevdetlabel = tips[4][user.detSkill % 10 - 1];
        $scope.detlabel = tips[4][user.detSkill % 10];

        $scope.currentTier = user.tier;

        $scope.disabled = "disabled";
        if (user.spentHP > nextTierlevel) {
            $scope.disabled = "";
        }

        $scope.upgradeTier = function() {
            if (user.spentHP > nextTierlevel) {
                user.tier++;
                $scope.currentTier = user.tier;
                nextTierlevel += 30;
                $scope.disabled = "disabled";
                user.stress = 0;
            }

        }

        function updateTierButton() {
            user.spentHP++;
            if (user.spentHP > nextTierlevel) {
                $scope.disabled = "";
            }
        }

        $scope.upgradesleep = function() {
            if (user.habitpower > 0 && user.sleepSkill < user.tier * 10) {
                user.sleepSkill++;
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.sleepSkill = user.sleepSkill;
                $scope.prevsleeplabel = tips[0][user.sleepSkill % 10 - 1];
                $scope.sleeplabel = tips[0][user.sleepSkill % 10];
                updateTierButton();
            }
        };

        $scope.upgradeexer = function() {
            if (user.habitpower > 0 && user.exerSkill < user.tier * 10) {
                user.exerSkill++;
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.exerSkill = user.exerSkill;
                $scope.prevexerlabel = tips[1][user.exerSkill % 10 - 1];
                $scope.exerlabel = tips[1][user.exerSkill % 10];
                updateTierButton();
            }
        };

        $scope.upgradediet = function() {
            if (user.habitpower > 0 && user.dietSkill < user.tier * 10) {
                user.dietSkill++;
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.dietSkill = user.dietSkill;

                $scope.prevdietlabel = tips[2][user.dietSkill % 10 - 1];
                $scope.dietlabel = tips[2][user.dietSkill % 10];
                updateTierButton();
            }
        };

        $scope.upgradegoals = function() {
            if (user.habitpower > 0 && user.goalSkill < user.tier * 10) {
                user.goalSkill++;
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.goalSkill = user.goalSkill;
                $scope.prevgoalslabel = tips[3][user.goalSkill % 10 - 1];
                $scope.goalslabel = tips[3][user.goalSkill % 10];
                updateTierButton();
            }

        };

        $scope.upgradedet = function() {
            if (user.habitpower > 0 && user.detSkill < user.tier * 10) {
                user.detSkill++;
                user.habitpower--;
                $scope.habitpower = user.habitpower;
                $scope.detSkill = user.detSkill;
                $scope.prevdetlabel = tips[4][user.detSkill % 10 - 1];
                $scope.detlabel = tips[4][user.detSkill % 10];
                updateTierButton();
            }
        };

    });
