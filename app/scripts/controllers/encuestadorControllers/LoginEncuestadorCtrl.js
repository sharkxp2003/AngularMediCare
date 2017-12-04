'use strict'

myApp.controller('LoginEncuestadorCtrl', function ($scope,$log,$http,$location,$mdDialog,UserService) {

    var modelo = {
        usuario : ''
    };


    $scope.modelo = modelo;

    $scope.login = function () {

        console.dir($scope.usuario);

        UserService.findUserByUsername($scope.usuario)
            .then(
                function (response) {
                    console.dir(response.data);
                    UserService.usuario = response.data
                    $location.path('/homeEncuestador');
                }
            ).catch(
                function (response) {
                    console.dir("Error");
                    console.dir(response);
                }
        )



    }


});

