"use strict";

myApp.controller('EncuestaDetalleCtrl', function ($scope,$log,$http,$location,$mdDialog,$routeParams) {


    var idEncuesta = $routeParams.idEncuesta
    var modelo = {
        categoria : []
    }




    $http.get('http://localhost:8080/encuesta/'+idEncuesta)
        .then(function successCallback(response) {
            //$log.debug("successCallback"+response.data);
            modelo.encuesta = response.data;
            for (var value in modelo.encuesta) {
                console.dir(value)
            }

        }, function errorCallback(response) {
            $log.debug("errorCallback");
        });


    $scope.obtenerCategoria = function (value) {
        $http.get('http://localhost:8080/encuesta/'+idEncuesta)
            .then(function successCallback(response) {
                $log.debug("successCallback"+response.data);
                return response.data;
            }, function errorCallback(response) {
                $log.debug("errorCallback");
            });
    }


    $scope.modelo = modelo;



});
