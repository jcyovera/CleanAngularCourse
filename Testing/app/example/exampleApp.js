'use strict';

angular.module('myApp.example', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example', {
    templateUrl: 'example/index.html',
    controller: 'ExampleController',
    controllerAs:'ctrl'
  });
}]);
