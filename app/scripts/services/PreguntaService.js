'use strict';


myApp.service('PreguntaService',function ($http) {

    var pregunta = {};
    var preguntas = [];

    return {
        obtenerPreguntas : obtenerPreguntas,
        agregarPreguntas : agregarPreguntas
    };

    function obtenerPreguntas (categoria) {
        //return categoria.preguntas;
        return preguntas;
    }

    function agregarPreguntas (value) {
        preguntas = value;
    }




});
