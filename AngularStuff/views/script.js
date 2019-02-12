var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    //routes
        .when("/", {
            templateUrl: "pages/home.html",
            controller: "mainController"
        })

        .when("/vampires", {
            templateUrl: "pages/vampires.html",
            controller: "vampController"
        })

        .when("/werewolves", {
            templateUrl: "pages/werewolves.html",
            controller: "wereController"
        })

        .when("/zombies", {
            templateUrl: "pages/zombies.html",
            controller: "zombController"
        });
});

app.controller("mainController", function($scope){
    $scope.message = "Monsters!";
});

app.controller("vampController", function($scope){
    $scope.message = "Vampires!";
});

app.controller("wereController", function($scope){
    $scope.message = "Werewolves!";
});

app.controller("zombController", function($scope){
    $scope.message = "Zombies!";
});