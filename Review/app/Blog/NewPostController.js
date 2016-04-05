angular.module('DemoAngular.dashboard')
.controller('NewPostController', ['$scope','blogFactory','$route','$location',
function($scope,blogFactory,$route,$location) {
  var _this=this;
  _this.post = {};
  _this.addPost = function(){
    _this.post.createdOn = Date.now();
    _this.post.comments = [];
    _this.post.likes = 0;
    blogFactory.addPosts(_this.post).then(function(data){
      console.log(data);
      $location.path('/');
    });
  };
}])
