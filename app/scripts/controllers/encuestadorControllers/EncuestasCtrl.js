'use strict'

myApp.controller('EncuestasCtrl', function ($scope,$log,$http,$location,$mdDialog,EncuestaService,CategoriaService,UserService) {

    var modelo = {
        encuestas: EncuestaService.encuestas,

        encuesta: {
            nombre: ""
        },
        categoria: {
            nombre: "",
            preguntas: []
        },
        categorias: CategoriaService.obtenerCategoriasLocal()

    }

    $scope.modelo = modelo


    $scope.agregarCategoria = function () {
        var categoria = angular.copy($scope.modelo.categoria);
        CategoriaService.agregarCategoriasLocal($scope.modelo.categoria);
        $scope.modelo.categoria = {};
    };

    $scope.agregarPreguntasFromCategory = function (val) {
        CategoriaService.categoria = CategoriaService.editarCategoriaLocal(val);
        $location.path('/nuevaEncuesta/categoria');
    };

    $scope.eliminarCategoria = function (val) {

        CategoriaService.eliminarCategoriaLocal(val);
    }

    $scope.guardarEncuesta = function () {

        modelo.encuesta.categorias = modelo.categorias;

        EncuestaService.agregarEncuesta(modelo.encuesta, UserService.usuario);
        alert("Encuesta Guardada")
        modelo.encuesta = {};
        modelo.categoria = {};
        modelo.categorias = [];
        CategoriaService.wipe();
        $location.path('/homeEncuestador');
    };

    $scope.visualizarEncuesta = function (val) {
        EncuestaService.nombreEncuesta = val;
        $location.path('/encuesta');

    };
});
