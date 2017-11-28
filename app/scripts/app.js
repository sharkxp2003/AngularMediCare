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
      }).when('/loginAdmin', {
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
    }).when('/loginEncuestador',{
        templateUrl: 'views/frontEndEncuestador/login.html',
        controller: 'LoginEncuestadorCtrl',
        controllerAs: 'loginEncuestadorCtrl'
    }).when('/homeEncuestador',{
        templateUrl: 'views/frontEndEncuestador/dashboard.html',
        controller: 'DashboardEncuestadorCtrl',
        controllerAs: 'dashbardEncuestadorCtrl'
    }).when('/encuestas', {
        templateUrl: 'views/frontEndEncuestador/encuestas.html',
        controller: 'EncuestasCtrl',
        controllerAs: 'encuestasCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
