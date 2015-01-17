(function(){
    'use strict';

    var app = App.angularFire;

    angular.module('AngularFire')
        .controller('loginCtrl', function($scope){
            $scope.login = {};
            $scope.currentUser = app.getAuth();

            $scope.getLogin = function(){
                app.authWithPassword($scope.login, function(err, user){
                    if (!err) {
                        console.log('logged in successfully.');
                        location.hash = '#!/dashboard';
                    } else {
                        console.log('error in logging-in.');
                        $scope.logginError = err.message;
                        $scope.$$phase || $scope.$digest();
                    }
                })
            };
        });

})();