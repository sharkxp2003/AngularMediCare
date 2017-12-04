'use strict'

myApp.controller('CategoriaCtrl', function ($scope,$log,$http,$location,$mdDialog,CategoriaService,TiporespuestaService) {

    var modelo = {
        categoria: CategoriaService.categoria,
        preguntas: []
    };

    $scope.modelo = modelo;



    $scope.agregarPregunta = function () {
        $mdDialog.show({
            controller: function Ctrl($scope,preguntas) {

                var modelo = {
                    nombre: "",
                    respuesta: {
                        texto: "",
                        tipo_respuesta: {}
                    },
                    respuestas:[],
                    tipos : []
                };

                TiporespuestaService.getTipoRespuesta()
                    .then(
                        function (response) {
                            modelo.tipos = response.data;
                        }
                    ).catch(
                    function (response) {
                        console.dir("Error en agregarPregunta tipos respuesta");
                    }
                )

                $scope.getSeleccion = function (val) {
                    $scope.modelo.respuesta.tipo_respuesta = $scope.modelo.tipos[val];
                };

                $scope.modelo = modelo;

                $scope.agregar = function () {
                    var value = angular.copy($scope.modelo.respuesta)
                    $scope.modelo.respuestas.push(value);
                    $scope.modelo.respuesta.texto = null;
                };

                $scope.eliminar = function (value) {
                    if (value > -1) {
                        $scope.modelo.respuestas.splice(value,1);
                    }
                }

                $scope.close = function () {
                    $mdDialog.hide();
                };

                $scope.guardar = function () {
                    var pregunta = {
                        nombre: modelo.nombre,
                        respuestas: modelo.respuestas
                    }
                    preguntas.push(pregunta);
                    $mdDialog.hide();

                };

            },
            controllerAs: "Ctrl",
            templateUrl: "views/frontEndEncuestador/modals/dialog_agregar_pregunta.html",
            clickOutsideToClose: true,
            locals : {
                preguntas: modelo.preguntas
            }
        });
    };

    $scope.modificarPregunta = function (pregunta) {
        $mdDialog.show({
            controller: function Ctrl($scope,pregunta) {

                var modelo = {
                    nombre: pregunta.nombre,
                    respuesta: {
                        texto: "",
                        tipo_respuesta: {}
                    },
                    respuestas: pregunta.respuestas,
                    tipos : []
                };

                TiporespuestaService.getTipoRespuesta()
                    .then(
                        function (response) {
                            modelo.tipos = response.data;
                        }
                    ).catch(
                    function (response) {
                        console.dir("Error en agregarPregunta tipos respuesta");
                    }
                )

                $scope.getSeleccion = function (val) {
                    $scope.modelo.respuesta.tipo_respuesta = $scope.modelo.tipos[val];
                };

                $scope.modelo = modelo;

                $scope.agregar = function () {
                    var value = angular.copy($scope.modelo.respuesta)
                    $scope.modelo.respuestas.push(value);
                    $scope.modelo.respuesta.texto = null;
                };

                $scope.eliminar = function (value) {
                    if (value > -1) {
                        $scope.modelo.respuestas.splice(value,1);
                    }
                }

                $scope.close = function () {
                    $mdDialog.hide();
                };

                $scope.guardar = function () {
                    var pregunta = {
                        nombre: modelo.nombre,
                        respuestas: modelo.respuestas
                    }
                    //preguntas.push(pregunta);
                    $mdDialog.hide();

                };

            },
            controllerAs: "Ctrl",
            templateUrl: "views/frontEndEncuestador/modals/dialog_agregar_pregunta.html",
            clickOutsideToClose: true,
            locals : {
                pregunta : pregunta
            }
        });
    };

    $scope.guardarCategoria = function () {
        $location.path('/nuevaEncuesta');
    };

});
