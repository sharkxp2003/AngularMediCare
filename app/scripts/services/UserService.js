'use strict';


myApp.service('UserService', function ($http) {

        var usuario;



        return {
            findUserByUsername:findUserByUsername,
            findUserById : findUserById
        };

        function findUserByUsername(username) {
            return $http.get('http://localhost:8080/usuario/username/'+username);
        }
        function findUserById(id) {
            return $http.get('http://localhost:8080/usuario/'+id);
        }





    });

