angular.module('myApp.view1')
.controller('View1Ctrl', ['$scope',function($scope) {
   var _this=this;
   _this.result = 0;
   _this.sum = function() {
    _this.result= _this.valueX+_this.valueY;
  };
}]);
