'use strict'

myApp.controller('DashboardEncuestadorCtrl', function ($scope,$log,$http,$location,
                                                       $mdDialog,UserService,EncuestaService) {

    var modelo = {
        encuestas : []
    }
    $scope.user = UserService
    $scope.modelo = modelo;


    EncuestaService.findEncuestasByUserId(UserService.usuario.id)
        .then(
            function (response) {
                console.dir(response.data);
                EncuestaService.encuestas = response.data
                modelo.encuestas = response.data
            }
        ).catch(
            function (response) {
                console.dir("Error")
                console.dir(response.data);
            }
    )















});
