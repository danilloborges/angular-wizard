angular.module('your-app', ['mgo-angular-wizard'])
.controller('testController',
    function($scope, $log){
        $scope.subtitle = "Meu subtitle";
        $scope.resume = "Passo final";
        $scope.changeSubtitle = function () {
            $scope.subtitle = "Meu new subtitle";
        };
        $scope.log = function(message){
            $log.info(message);
        };
        $scope.$on('wizard:stepChanged', function(event, change) {
            $log.info(change);
        });
    }
);
