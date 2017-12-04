'use strict';

/**
 * @ngdoc overview
 * @name webstormProjectsApp
 * @description
 * # webstormProjectsApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('webstormProjectsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch','ngMaterial'
  ])
  .config(function ($routeProvider, $httpProvider) {


      $httpProvider.defaults.useXDomain =true
      delete $httpProvider.defaults.headers.common['X-Requested-With']


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/loginAdministrador', {
        tempalteUrl: 'views/frontEndAdmin/login.html',
        controller: 'LoginAdminCtrl',
        controllerAs: 'loginAdminCtrl'
      }).when('/homeAdmin', {
        templateUrl: 'views/frontEndAdmin/dashboard.html',
        controller: 'DashboardAdminCtrl',
        controllerAs: 'dashboardAdminCtrl'
      }).when('/encuestadores',{
          templateUrl: 'views/frontEndAdmin/encuestadores.html',
          controller: 'EncuestadoresCtrl',
          controllerAs: 'encuestadoresCtrl'
    }).when('/homeEncuestador',{
        templateUrl: 'views/frontEndEncuestador/dashboard.html',
        controller: 'DashboardEncuestadorCtrl',
        controllerAs: 'dashboardEncuestadorCtrl'

    }).when('/nuevaEncuesta', {
        templateUrl: 'views/frontEndEncuestador/nuevaEncuesta.html',
        controller: 'EncuestasCtrl',
        controllerAs: 'encuestasCtrl'
    }).when('/nuevaEncuesta/categoria', {
        templateUrl: 'views/frontEndEncuestador/agregarCategoria.html',
        controller: 'CategoriaCtrl',
        controllerAs: 'categoriaCtrl'
    }).when('/loginEncuestador',{
        templateUrl: 'views/frontEndEncuestador/login.html',
        controller: 'LoginEncuestadorCtrl',
        controllerAs: 'loginEncuestadorCtrl'
    }).when('/encuestas', {
        templateUrl: 'views/frontEndEncuestador/encuestas.html',
        controller: 'EncuestasCtrl',
        controllerAs: 'encuestasCtrl'
    }).when('/encuestas/:idEncuesta',{
        templateUrl: 'views/frontEndEncuestador/visualizarEncuesta.html',
        controller: 'EncuestaDetalleCtrl',
        controllerAs: 'encuestaDetalleCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  })
  .service('User', function () {
          return {};
      });
