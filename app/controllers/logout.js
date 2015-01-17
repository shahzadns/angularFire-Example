(function(){
    'use strict';

    var app = App.angularFire;

    angular.module('AngularFire')
        .controller('logoutCtrl', function($scope){
            $scope.userLoggedOut = false;

            app.unauth(function(err){
                if (!err) {
                    console.log('logged out successfully.');
                    $scope.userLoggedOut = true;
                    $scope.$$phase || $scope.$digest();
                } else {
                    console.log('error in logging-out.');
                }
            });
        });

})();