'use strict';


myApp.service('EncuestaService',function ($http) {

    var encuestas;
    var encuesta;
    var nombreEncuesta;


    return {
        findEncuestasByUsername : findEncuestasByUsername,
        findEncuestasByUserId : findEncuestasByUserId,
        agregarEncuesta : agregarEncuesta,
        getEncuesta : getEncuesta,
        setEncuestaLocal : setEncuestaLocal,
        getEncuestaLocal : getEncuestaLocal

    };

    function findEncuestasByUsername(username) {

    }

    function findEncuestasByUserId(id) {
        return $http.get('http://localhost:8080/usuario/'+id+'/encuesta');
    }

    function agregarEncuesta(encuesta, usuario) {
        var id = usuario.id;
        return $http.post('http://localhost:8080/usuario/'+id+'/encuesta',encuesta);

    }

    function getEncuesta (id) {
        return $http.get('http://localhost:8080/encuesta/nombre/'+id);
    }

    function setEncuestaLocal (encuesta) {
        encuesta = encuesta;
    }

    function getEncuestaLocal () {
        return encuesta;
    }




});

