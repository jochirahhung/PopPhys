angular.module("helloApp", [])
    .controller("HelloController", function($scope) {
        $scope.greet = {};
        $scope.greet.name = "Bob";
    })