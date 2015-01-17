(function(){
    'use strict';

    var app = App.angularFire;

    angular.module('AngularFire')
        .controller('recordsCtrl', function($scope){
            $scope.records = [];
            $scope.record  = {};

            var user = app.getAuth();
            if(!user) return;

            var recordsRef = app.child('records');
            recordsRef.orderByChild("uid").equalTo(user.uid).on('value', function(snapshot){
                $scope.records = snapshot.val();
                $scope.$$phase || $scope.$digest();
            });

            $scope.addRecord = function(){
                recordsRef.push({
                    title : $scope.record.title,
                    uid   : user.uid
                });

                $scope.record = {};
            };

            $scope.editRecord = function(recordId, record){
                $scope.editState    = recordId;
                $scope.record.title = record.title;
            };

            $scope.updateRecord = function(){
                recordsRef.child($scope.editState).update($scope.record, function(err){
                    if(err){
                        console.log('Update Failed.');
                    } else {
                        $scope.editState = null;
                        $scope.record = {};
                        $scope.$$phase || $scope.$digest();
                    }
                });
            };

            $scope.removeRecord = function(recordId){
                recordsRef.child(recordId).remove();
            };
        });

})();