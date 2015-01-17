(function(){
    'use strict';

    var app = App.angularFire;

    angular.module('AngularFire')
        .controller('dashboardCtrl', function($scope){
            $scope.isLoggedIn = app.getAuth();
        });
})();