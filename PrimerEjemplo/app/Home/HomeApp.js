'use strict';

angular.module('DemoAngular.home', ['ngRoute','angularMoment','moment-picker'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'Home/home.html',
    controller: 'HomeController',
    controllerAs:'home'
  }).when('/home/:gitId', {
    templateUrl: 'Home/home.html',
    controller: 'HomeController',
    controllerAs:'home'
  });


}]);
