angular.module('myApp', []).controller('personController', function($scope){
    $scope.person = {
        people: [
            { 
                name: 'Janet',
                type: 'human',
                age: 52,
                cash: 52.05
            },
            {
                name: 'Harry',
                type: 'werewolf',
                age: 78,
                cash: 30
            },
            {
                name: 'Suzette',
                type: 'vampire',
                age: 1001,
                cash: 1000000.01
            },
            {
                name: 'Bob',
                type: 'zombie',
                age: 7,
                cash: 67.38
            }
        ]
    }
});