(function(){
    'use strict';

    var app = App.angularFire;

    angular.module('AngularFire')
        .controller('signupCtrl', function($scope){
            $scope.signup = {};
            $scope.currentUser = app.getAuth();
            
            $scope.getSignup = function(){
                app.createUser($scope.signup, function (err) {
                    if (!err) {
                        console.log('signed-up successfully.');
                    } else {
                        console.log('error signing-up');
                        $scope.signupError = err.message;
                        $scope.$$phase || $scope.digest();
                    }
                });
            };
        });

})();