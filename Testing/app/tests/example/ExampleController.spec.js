'use strict';

describe('myApp.example module', function() {
  var view1Controller,$rootScope,  $controller,$q,$scope ;

beforeEach(function () {
  module('myApp.example');
    inject([
              '$injector', function($injector) {
                  $rootScope = $injector.get('$rootScope');
                  $controller = $injector.get('$controller');
                  $q = $injector.get('$q');
              }
  ]);

  $scope = $rootScope.$new();
  view1Controller = $controller('ExampleController', {
           $scope: $scope
  });

});

  describe('Example controller', function(){
    it("should load the controller", function() {
      //spec body
      var view1Ctrl = view1Controller;
      expect(view1Ctrl).toBeDefined();
    });
    it("should sum 2 values", function() {
          // Arrange
           var x=2,y=3;
           // Act
           view1Controller.valueX=x;
           view1Controller.valueY=y;
           view1Controller.sum();
           // Assert
           expect(view1Controller.result).toBe(5);
    });
  });

});
