(function (angular) {
  'use strict';
  angular
      .module('myApp.example')
      .controller('ExampleController', ExampleController);
  ExampleController.$inject = ['$scope'];

  function ExampleController($scope) {
    var _this=this;
    _this.result = 0;
    _this.sum = function() {
     _this.result= _this.valueX+_this.valueY;
   };
  };
})(window.angular);
