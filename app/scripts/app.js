'use strict';

/**
 * @ngdoc overview
 * @name habitmanApp
 * @description
 * # habitmanApp
 *
 * Main module of the application.
 */

var app = angular
    .module('habitmanApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'LocalStorageModule'
    ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
                localStorageServiceProvider.setPrefix('ls');
            }])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainCtrl',
                controllerAs: 'main',
            })
            .when('/about', {
                templateUrl: 'views/about.html',
            })
            .when('/upgrade', {
                templateUrl: 'views/upgrade.html',
                controller: 'UpgradeCtrl',
                controllerAs: 'upgd'
            })
            .when('/howtoplay', {
                templateUrl: 'views/howtoplay.html',
            })
            .when('/training', {
                templateUrl: 'views/training.html',
                controller: 'TrainCtrl',
                controllerAs: 'train'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
