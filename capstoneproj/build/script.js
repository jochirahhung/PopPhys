
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
            controller: "mainController"
        })

        .when("/quiz", {
            templateUrl: "pages/quiz.html",
            controller: "quizController"
        })

        
        .when("/courses", {
            templateUrl: "pages/courses.html",
            controller: "courseController"
        })



        .when("/study", {
            templateUrl: "pages/study.html",
            controller: "studyController"
        })

        .when("/createUser", {
            templateUrl: "pages/create.html",
            controller: "createController"
        })
        
        .when("/logout", {
            templateUrl: "pages/logout.html",
            controller: "logoController"
        });

});




app.controller("mainController", function($scope){
    $scope.message = "Home";
});

app.controller("courseController", function($scope){
    $scope.message = "Courses";
});

app.controller("quizController", function($scope){
    $scope.message = "Quiz Time";
});



app.controller("createController", function($scope){
    $scope.message = "Please Create A User";
});

app.controller("studyController", function($scope){
    $scope.message = "Study Guide";
});

app.controller("logoController", function($scope){
});



