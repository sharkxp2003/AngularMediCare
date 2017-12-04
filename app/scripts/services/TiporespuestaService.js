'use strict';


myApp.service('TiporespuestaService',function ($http) {



    return {
        getTipoRespuesta : getTipoRespuesta
    };

    function getTipoRespuesta () {
        return $http.get('http://localhost:8080/tipoRespuesta');
    }




});
