'use strict';

/**
 * @ngdoc function
 * @name habitmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the habitmanApp
 */
angular.module('habitmanApp')
    .controller('MainCtrl', function($scope, sharedProperties, userStats, localStorageService) {
        //grabbing titles from the service
        var titles = sharedProperties.getTitles();

        var pastData = localStorageService.get('gameData');

        //getting gameData
        var user = pastData || userStats.getStats();

        //lists of stuff to buy
        var vehicles = sharedProperties.getTrans();
        var salary = sharedProperties.getSalary();
        var transPrices = sharedProperties.getTransPrices();
        var homes = sharedProperties.getHomes();
        var homesPrices = sharedProperties.getHomesPrices();
        var currentHouseName = sharedProperties.getHouseNames();
        var count = 0;

        //calculating time gone and adding money, age, tax
        if (!user.date) {
            user.date = Date.now();
            $scope.welcomeback = true;
        } else {
            $scope.taxStart = true;
        }
        var dateDifference = Date.now() - user.date;
        if (dateDifference > 20800000) {
            dateDifference = 20800000;
        }
        var earned = dateDifference / 500 * (user.wage * user.weeklyHours / 8.3 - user.familyBudget / 8);
        var aged = dateDifference / 500 * (.0024);
        var taxAdded = dateDifference / 500 * (user.wage * user.weeklyHours / 20);
        user.age += aged;
        user.lifeSavings += earned;
        user.taxOwed += taxAdded;
        aged = aged.toFixed(2);
        $scope.aged = aged;
        $scope.earned = earned;
        $scope.taxAdded = taxAdded;

        //show initial stats
        $scope.habitpower = user.habitpower;
        $scope.jobtitle = titles[user.joblevel];
        $scope.hourlyWage = user.wage;
        $scope.lifeSavings = user.lifeSavings;
        $scope.age = user.age;
        $scope.weeklyHours = user.weeklyHours;
        $scope.transport = vehicles[user.vehicleLevel];
        $scope.transPrice = transPrices[user.vehicleLevel];
        $scope.tax = user.taxOwed;
        $scope.currentHouseName = currentHouseName[user.homeLevel];

        $scope.nextHome = homes[user.homeLevel];
        $scope.homePrice = homesPrices[user.homeLevel];
        $scope.familyTime = user.familyTime;
        $scope.familyMembers = user.familyMembers;
        $scope.familyBudget = user.familyBudget;

        if (user.homeLevel > 3) {
            $scope.family = true;
        }

        $scope.currentHome = "Park bench";
        if (user.homeLevel > 0) {
            $scope.upgradedHome = true;
            $scope.currentHome = homes[user.homeLevel - 1];
        }


        if (user.vehicleLevel == 0) {
            $scope.transportation = "Legs";
        } else {
            $scope.transportation = vehicles[user.vehicleLevel - 1];
        }

        if (user.wage > 10) {
            $scope.taxStart = true;
        }

        $scope.reset = function() {
                localStorage.clear();
                location.reload();
            }
            //functions to give values to the progress bars
        $scope.prodStatus = function() {
            if (user.prod > 100 && user.joblevel < 312) {
                user.prod = 20;
                user.joblevel++;
                $scope.jobtitle = titles[user.joblevel];
                user.wage = salary[user.joblevel] / 2;
                $scope.hourlyWage = user.wage;
                user.stress += user.stressMultiplier;
                user.sleep = 0;
                user.exercise = 0;
                user.diet = 0;
                user.goals = 0;
                user.determination = 0;
                if (user.wage > 10) {
                    $scope.taxStart = true;
                }
                localStorageService.set('gameData', user);
            } else if (user.joblevel == 312) {
                user.prod = 100;
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
                $scope.sleepImage = true;
            } else {
                $scope.sleepImage = false;
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
                $scope.exerImage = true;
            } else {
                $scope.exerImage = false;
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
                $scope.dietImage = true;
            } else {
                $scope.dietImage = false;
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
                $scope.goalImage = true;
            } else {
                $scope.goalImage = false;
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
                $scope.detImage = true;
            } else {
                $scope.detImage = false;
            }
            return "width: " + user.determination + "%;";
        };

        $scope.buyTrans = function() {
                if (user.lifeSavings > transPrices[user.vehicleLevel]) {
                    user.lifeSavings -= transPrices[user.vehicleLevel];
                    $scope.transportation = vehicles[user.vehicleLevel];
                    user.vehicleLevel++;
                    $scope.transport = vehicles[user.vehicleLevel];
                    $scope.transPrice = transPrices[user.vehicleLevel];
                    localStorageService.set('gameData', user);
                }

            }
            //buttons to raise the habit progress bars
        $scope.nap = function() {
            user.sleep += user.sleepSkill * 20 - user.stress * user.weeklyHours / 100;
        }
        $scope.walk = function() {
            user.exercise += user.exerSkill * 20 - user.stress * user.weeklyHours / 100;
        }
        $scope.snack = function() {
            user.diet += user.dietSkill * 20 - user.stress * user.weeklyHours / 100;
        }
        $scope.plan = function() {
            user.goals += user.goalSkill * 20 - user.stress * user.weeklyHours / 100;
        }
        $scope.focus = function() {
            user.determination += user.detSkill * 20 - user.stress * user.weeklyHours / 100;
        }
        $scope.rotateHours = function() {
            user.weeklyHours += 20;
            if (user.weeklyHours > 110) {
                user.weeklyHours = 20;
            }
            $scope.weeklyHours = user.weeklyHours;
            localStorageService.set('gameData', user);
        }
        $scope.payTax = function() {
            if (user.lifeSavings > user.taxOwed) {
                user.lifeSavings -= user.taxOwed;
                user.taxOwed = 0;
                $scope.tax = user.taxOwed;
                $scope.lifeSavings = user.lifeSavings;
            } else if (user.lifeSavings > 0) {
                user.taxOwed -= user.lifeSavings;
                user.lifeSavings = 0;
                $scope.tax = user.taxOwed;
                $scope.lifeSavings = user.lifeSavings;
            }
            localStorageService.set('gameData', user);
        }

        $scope.changeFamilyBudget = function() {
            user.familyBudget += 400;
            if (user.familyBudget > 2000) {
                user.familyBudget = 200;
            }
            $scope.familyBudget = user.familyBudget;
            localStorageService.set('gameData', user);
        }

        function addChild() {
            var child = Math.random();
            if (child > .5) {
                user.familyMembers[Object.keys(user.familyMembers).length + 1] = 'boy';
            } else {
                user.familyMembers[Object.keys(user.familyMembers).length + 1] = 'girl';
            }
            localStorageService.set('gameData', user);
        }

        $scope.upgradeHome = function() {
            if (homesPrices[user.homeLevel] < user.lifeSavings) {
                user.lifeSavings -= homesPrices[user.homeLevel];
                $scope.currentHome = homes[user.homeLevel];
                user.homeLevel++;
                $scope.nextHome = homes[user.homeLevel];
                $scope.homePrice = homesPrices[user.homeLevel];
                if (user.homeLevel > 3) {
                    $scope.family = true;
                }
                if (user.homeLevel > 0) {
                    $scope.upgradedHome = true;
                }
                $scope.currentHouseName = currentHouseName[user.homeLevel];
                localStorageService.set('gameData', user);
            }
        }

        $scope.rotateFamilyHours = function() {
            user.familyTime += 10;
            if (user.familyTime > 55) {
                user.familyTime = 10;
            }
            $scope.familyTime = user.familyTime;
            localStorageService.set('gameData', user);
        }

        //function for each half second update
        var oneSecond = function() {
                count++;
                if (count % 5 == 0) {
                    user.date = Date.now();
                    localStorageService.set('gameData', user);
                }

                //add on money and update in DOM
                user.lifeSavings = Math.round(user.lifeSavings + user.wage * user.weeklyHours / 8.3 - user.familyBudget / 8);
                $scope.lifeSavings = user.lifeSavings;

                user.familyIndex = user.familyIndex + user.familyTime * user.familyBudget;
                if (user.familyIndex > 20000000) {
                    addChild();
                    user.familyIndex = 0;
                }

                //add on tax
                if ($scope.taxStart) {
                    user.taxOwed = Math.round(user.taxOwed + user.wage * user.weeklyHours / 20);
                    $scope.tax = user.taxOwed;
                }

                //add on age and update in DOM
                user.age = user.age + .0024;
                $scope.age = user.age.toFixed(2);

                //add variance & add stress to habit progress bars
                user.sleep = user.sleep + 2 - 4 * Math.random() - user.tier * user.stress * user.weeklyHours / 150 + user.sleepSkill;
                user.determination = user.determination + 2 - 4 * Math.random() - user.tier * user.stress * user.weeklyHours / 150 + user.detSkill;
                user.diet = user.diet + 2 - 4 * Math.random() - user.tier * user.stress * user.weeklyHours / 150 + user.dietSkill;
                user.exercise = user.exercise + 2 - 4 * Math.random() - user.tier * user.stress * user.weeklyHours / 150 + user.exerSkill;
                user.goals = user.goals + 2 - 4 * Math.random() - user.tier * user.stress * user.weeklyHours / 150 + user.goalSkill;

                //calculate productivity
                user.prod = user.prod + (user.sleep / 1000 + user.diet / 1000 + user.exercise / 1000 + user.determination / 1000 + user.goals / 1000) * ((user.vehicleLevel * .8) + 1) - .25;

                //apply $scope updates
                $scope.$apply();
            }
            //starting the update cycle

        var timer = setInterval(function() {
            oneSecond();
        }, 500);

        $scope.$on("$destroy", function() {
            clearInterval(timer);
        });

    });
