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
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {


      $httpProvider.defaults.useXDomain =true
      delete $httpProvider.defaults.headers.common['X-Requested-With']


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/loginAdmin', {
        tempalteUrl: 'view/frontEndAdmin/login.html',
        controller: 'LoginAdminCtrl',
        controllerAs: 'loginAdminCtrl'
      }).when('/homeAdmin', {
        templateUrl: 'view/frontEndAdmin/dashboard.html',
        controller: 'DashboardAdminCtrl',
        controllerAs: 'dashboardAdminCtrl'
      }).when('/encuestadores',{
          templateUrl: 'view/frontEndAdmin/encuestadores.html',
          controller: 'EncuestadoresCtrl',
          controllerAs: 'encuestadoresCtrl'
    }).when('/loginEncuestador',{
        templateUrl: 'view/frontEndEncuestador/login.html',
        controller: 'LoginEncuestadorCtrl',
        controllerAs: 'loginEncuestadorCtrl'
    }).when('/homeEncuestador',{
        templateUrl: 'view/frontEndEncuestador/dashboard.html',
        controller: 'DashboardEncuestadorCtrl',
        controllerAs: 'dashbardEncuestadorCtrl'
    }).when('/encuestas', {
        templateUrl: 'view/frontEndEncuestador/encuestas.html',
        controller: 'EncuestasCtrl',
        controllerAs: 'encuestasCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
