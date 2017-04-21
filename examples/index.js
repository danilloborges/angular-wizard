angular.module('your-app', ['mgo-angular-wizard'])
.controller('testController',
    function($scope){
        $scope.subtitle = "Meu subtitle";
        $scope.changeSubtitle = function () {
            $scope.subtitle = "Meu new subtitle";
        };
    }
);
