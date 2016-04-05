'use strict';

angular.module('DemoAngular.dashboard', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'Blog/dashboard.html',
    controller: 'DashboardController',
    controllerAs:'blog'
  })
  .when('/new', {
    templateUrl: 'Blog/new.html',
    controller: 'NewPostController',
    controllerAs:'blog'
  })
  .when('/newComment/:postId', {
    templateUrl: 'Blog/comment.html',
    controller: 'CommentController',
    controllerAs:'commentCtrl'
  })
  ;


}]);
