'use strict'

myApp.controller('LoginAdminCtrl', function ($scope,$log,$http,$location,$mdDialog) {

var modelo = {
    usuario:"",
    password:""
};




$scope.login = function () {

    $location.path('')
}

$scope.modelo = modelo;

});
