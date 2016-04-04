angular.module('DemoAngular.home')
.controller('HomeController', ['$scope','ProfileFactory','$route','$routeParams','$location',
function($scope,ProfileFactory,$route,$routeParams,$location) {
 var _this=this;
 _this.reload = function() {
   $route.reload();
}

_this.goToSearch=function(){
  $location.path('/view2');
}
_this.gitId=$routeParams.gitId;
console.log($routeParams.gitId);
  ProfileFactory.getProfile().then(function (response) {
    _this.ProfileData=response;
      _this.GetRepos(_this.ProfileData.repos_url);
  }).finally(function () {
  });

  _this.GetRepos=function(url){
    ProfileFactory.getRepos(url).then(function (response) {
      _this.Repositories=response;
    }).finally(function () {
    });
  }
}])
