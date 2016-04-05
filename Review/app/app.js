'use strict';

// Declare app level module which depends on views, and components
angular.module('DemoAngular', [
  'ngRoute',
  'DemoAngular.dashboard',
  'DemoAngular.view2',
  'DemoAngular.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
