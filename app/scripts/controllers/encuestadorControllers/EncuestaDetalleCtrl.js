"use strict";

myApp.controller('EncuestaDetalleCtrl', function ($scope,$log,$http,$location,$mdDialog,$routeParams,EncuestaService,CategoriaService) {

var modelo = {
    encuesta : {},
    categoria: {}
};

EncuestaService.getEncuesta(EncuestaService.nombreEncuesta)
    .then(function (response) {
        EncuestaService.setEncuestaLocal(response.data)
        modelo.encuesta = response.data;
        CategoriaService.categorias = response.data.categorias;
    }).catch(function (response) {
    console.dir("error");
})


    $scope.agregarPreguntasFromCategory = function (val) {
        modelo.categoria = modelo.categoria[val]
        $location.path('/encuesta/categoria');
    };

    $scope.modelo = modelo;


});
