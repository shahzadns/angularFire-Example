(function(){
    'use strict';

    angular.module('AngularFire').config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/dashboard', {
                controller: 'dashboardCtrl',
                templateUrl : './app/views/dashboard.html'
            })
            .when('/signup', {
                controller: 'signupCtrl',
                templateUrl : './app/views/signup.html'
            })
            .when('/login', {
                controller: 'loginCtrl',
                templateUrl : './app/views/login.html'
            })
            .when('/logout', {
                controller: 'logoutCtrl',
                templateUrl : './app/views/logout.html'
            })
            .otherwise({
                redirectTo : '/dashboard'
            });

        // Configure the hashbang URLs using the $locationProvider services
        $locationProvider.hashPrefix('!');
    });

})();
