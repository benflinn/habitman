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
    .module('habitmanApp',
    [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
    .when('/upgrade', {
        templateUrl: 'views/upgrade.html',
    })
    .when('/howtoplay', {
        templateUrl: 'views/howtoplay.html',
    })
    .when('/training', {
        templateUrl: 'views/training.html',
    })
    .otherwise({
        redirectTo: '/'
    });
});


