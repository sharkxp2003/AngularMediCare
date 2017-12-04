'use strict';


myApp.service('EncuestaService',function ($http) {

    var encuestas;
    var encuesta;


    return {
        findEncuestasByUsername : findEncuestasByUsername,
        findEncuestasByUserId : findEncuestasByUserId

    };

    function findEncuestasByUsername(username) {

    }

    function findEncuestasByUserId(id) {
        return $http.get('http://localhost:8080/usuario/'+id+'/encuesta');
    }




});

