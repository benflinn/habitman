'use strict';

/**
 * @ngdoc function
 * @name habitmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the habitmanApp
 */
angular.module('habitmanApp')
    .controller('MainCtrl', function($scope, sharedProperties, userStats) {
        //grabbing titles from the service
        var titles = sharedProperties.getTitles();

        //getting userData
        var user = userStats.getStats();
        var vehicles = sharedProperties.getTrans();
        var salary = sharedProperties.getSalary();

        //show initial stats
        $scope.habitpower = user.habitpower;
        $scope.jobtitle = titles[user.joblevel];
        $scope.hourlyWage = user.wage;
        $scope.lifeSavings = user.lifeSavings;
        $scope.age = user.age;
        $scope.weeklyHours = user.weeklyHours;
        $scope.transport = vehicles[user.vehicleLevel];

        //functions to give values to the progress bars
        $scope.prodStatus = function() {
            if (user.prod > 100) {
                user.prod = 0;
                user.joblevel++;
                $scope.jobtitle = titles[user.joblevel];
                user.wage = salary[user.joblevel]/2;
                $scope.hourlyWage = user.wage;
                user.stress++;
            }
            if (user.prod < 0) {
                user.prod = 0;
            }
            return "width: " + user.prod + "%;";
        };
        $scope.sleepStatus = function() {
            if (user.sleep > 100) {
                user.sleep = 100;
            }
            if (user.sleep < 0) {
                user.sleep = 0;
            }
            if (user.sleep > 50) {
                $scope.sleepImage = 'sleep.png';
            } else {
                $scope.sleepImage = 'nosleep.png';
            }
            return "width: " + user.sleep + "%;";
        };
        $scope.exerStatus = function() {
            if (user.exercise > 100) {
                user.exercise = 100;
            }
            if (user.exercise < 0) {
                user.exercise = 0;
            }
            if (user.exercise > 50) {
                $scope.exerImage = 'exer.png';
            } else {
                $scope.exerImage = 'noexer.png';
            }

            return "width: " + user.exercise + "%;";
        };
        $scope.dietStatus = function() {
            if (user.diet > 100) {
                user.diet = 100;
            }
            if (user.diet < 0) {
                user.diet = 0;
            }
            if (user.diet > 50) {
                $scope.dietImage = 'diet.png';
            } else {
                $scope.dietImage = 'nodiet.png';
            }

            return "width: " + user.diet + "%;";
        };
        $scope.goalStatus = function() {
            if (user.goals > 100) {
                user.goals = 100;
            }
            if (user.goals < 0) {
                user.goals = 0;
            }
            if (user.goals > 50) {
                $scope.goalImage = 'goals.png';
            } else {
                $scope.goalImage = 'nogoals.png';
            }
            return "width: " + user.goals + "%;";
        };
        $scope.detStatus = function() {
            if (user.determination > 100) {
                user.determination = 100;
            }
            if (user.determination < 0) {
                user.determination = 0;
            }
            if (user.determination > 50) {
                $scope.detImage = 'determine.png';
            } else {
                $scope.detImage = 'nodetermine.png';
            }
            return "width: " + user.determination + "%;";
        };
        $scope.buyTrans = function() {
            if (user.lifeSavings > 1000) {
                user.lifeSavings -= 1000;
                user.vehicleLevel++;
                $scope.transport = vehicles[user.vehicleLevel];
            }
        }
        //buttons to raise the habit progress bars
        $scope.nap = function() {
            user.sleep += user.sleepSkill - user.stress * user.weeklyHours / 100;
        }
        $scope.walk = function() {
            user.exercise += user.exerSkill - user.stress * user.weeklyHours / 100;
        }
        $scope.snack = function() {
            user.diet += user.dietSkill - user.stress * user.weeklyHours / 100;
        }
        $scope.plan = function() {
            user.goals += user.goalSkill - user.stress * user.weeklyHours / 100;
        }
        $scope.focus = function() {
            user.determination += user.detSkill - user.stress * user.weeklyHours / 100;
        }
        $scope.rotateHours = function() {
            user.weeklyHours += 20;
            if (user.weeklyHours > 110) {
                user.weeklyHours = 20;
            }
            $scope.weeklyHours = user.weeklyHours;
        }

        //function for each half second update
        var oneSecond = function() {

                //add on money and update in DOM
                user.lifeSavings = Math.round(user.lifeSavings + user.hourlyWage * user.weeklyHours / 8.3);
                $scope.lifeSavings = user.lifeSavings;

                //add on age and update in DOM
                user.age = Math.round(10000 * (user.age + .0024)) / 10000;
                $scope.age = user.age;

                //add variance & add stress to habit progress bars
                user.sleep = user.sleep + 2 - 4 * Math.random() - user.stress * user.weeklyHours / 100 + user.sleepSkill / 20;
                user.determination = user.determination + 2 - 4 * Math.random() - user.stress * user.weeklyHours / 100 + user.detSkill / 20;
                user.diet = user.diet + 2 - 4 * Math.random() - user.stress * user.weeklyHours / 100 + user.dietSkill / 20;
                user.exercise = user.exercise + 2 - 4 * Math.random() - user.stress * user.weeklyHours / 100 + user.exerSkill / 20;
                user.goals = user.goals + 2 - 4 * Math.random() - user.stress * user.weeklyHours / 100 + user.goalSkill / 20;
                
                //calculate productivity
                user.prod = user.prod + user.sleep / 100 + user.diet / 100 + user.exercise / 100 + user.determination / 100 + user.goals / 100 - 2.5;
                
                //apply $scope updates
                $scope.$apply();
            }
            //starting the update cycle
        setInterval(function() {
            oneSecond();
        }, 500);
    });
