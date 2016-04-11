'use strict';

angular.module('myApp.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: 'blog/index.html',
    controller: 'BlogController',
    controllerAs:'blog'
  });
}]);
