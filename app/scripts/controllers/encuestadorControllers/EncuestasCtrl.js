'use strict'

myApp.controller('EncuestasCtrl', function ($scope,$log,$http,$location,$mdDialog,EncuestaService,CategoriaService) {

var modelo = {
    encuestas : EncuestaService.encuestas,

    encuesta :{
        nombre:""
    },
    categoria: {
        nombre:""
    },
    categorias: []

}

$scope.modelo = modelo


$scope.agregarCategoria = function() {

    modelo.categorias.push($scope.modelo.categoria);
    $scope.modelo.categoria = null
};

$scope.agregarPreguntasFromCategory = function (val) {
    CategoriaService.categoria = $scope.modelo.categorias[val];
    CategoriaService.categorias = $scope.modelo.categorias;
    EncuestaService.encuesta =
    $location.path('/nuevaEncuesta/categoria');

}





});
