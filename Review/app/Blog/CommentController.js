angular.module('DemoAngular.dashboard')
.controller('CommentController', ['$scope','blogFactory','$route','$routeParams','$location',
function($scope,blogFactory,$route,$routeParams,$location) {
  var _this=this;
  _this.comment = {};
    _this.addComment = function(){
      _this.comment.createdOn = Date.now();
      _this.comment.postId=$routeParams.postId;
      blogFactory.addComment(_this.comment).then(function(data){
        console.log(data);
        $location.path('/');
      });
    };
}])
