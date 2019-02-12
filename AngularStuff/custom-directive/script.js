var app = angular.module("myApp", []);
app.directive("iSeeAZombie", function() {
    return {
        template: "<h1>Braaaaiiinnss!!</h1>"
    };
});

app.directive("iSeeAVampire", function(){
    return {
        restrict: 'C',
        template: "<h1>Bleh bleh bleh!</h1>"
    };
});