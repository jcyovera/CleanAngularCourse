'use strict';

angular.module('DemoAngular.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs:'view2'
  });
}])

.controller('View2Ctrl', ['dataFactory',function(dataFactory) {
  //$scope.items=dataFactory.getItems();
  var _this=this;
  _this.items=dataFactory.getItems();
  _this.titlePage="Search title";
}]);
