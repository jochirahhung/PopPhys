var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when("/page1", {
            templateUrl: 'pages/page1.html',
            controller: '1Controller'
        })
        .when("/page2", {
            templateUrl: 'pages/page2.html',
            controller: '2Controller'
        })
});

app.controller('mainController', function($scope){
    $scope.message = "Hello, this is me!";
    $scope.nav = {
        navbar: [
            {link: '/', name: 'Home'},
            {link: '/page1', name: 'Page 1'},
            {link: '/page2', name: 'Page 2'}
        ]
    }
});

app.controller('1Controller', function($scope){
    $scope.message = "Page 1";
    $scope.nav = {
        navbar: [
            {link: '/', name: 'Home'},
            {link: '/page1', name: 'Page 1'},
            {link: '/page2', name: 'Page 2'}
        ]
    }
});

app.controller('2Controller', function($scope){
    $scope.message = "Page 2";
    $scope.nav = {
        navbar: [
            {link: '/', name: 'Home'},
            {link: '/page1', name: 'Page 1'},
            {link: '/page2', name: 'Page 2'}
        ]
    }
});

function nextPage(evt) {
    var curPage = window.location.href;
    var nextPage = curPage.substring(curPage.length - 1);
    var goHere = parseInt(nextPage) + 1;
    window.location.href = "#!page" + goHere;
}