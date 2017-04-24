angular.module('your-app', ['mgo-angular-wizard'])
.controller('testController',
    function($scope){
        $scope.subtitle = "Meu subtitle";
        $scope.resume = "Passo final";
        $scope.changeSubtitle = function () {
            $scope.subtitle = "Meu new subtitle";
        };
    }
);
