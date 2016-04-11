(function (angular) {
    angular
        .module('myApp.blog')
        .directive('postDirective', postDirective)
        .controller('PostController', PostController);


    function postDirective() {
        'use strict';
        return {
            restrict: 'EA',
            scope:{
              showPost:'='
            },
            bindToController: {
                postValue: '=',
            },
            templateUrl: 'blog/post/postTemplate.html',
            controller: 'PostController',
            controllerAs: 'post',
            link: function (scope, element, attrs, PostController) {
              scope.$watch("showPost", function (value) {
                   PostController.getComments();
              });
           }
        };
    };
    PostController.$inject = ['$scope', 'blogFactory','$route'];
    function PostController($scope, blogFactory,$route) {
        var post = this;
        post.postValue={};
        post.backPage=function(){
          $route.reload();
        };
        post.initialize = function () {
          post.postValue.comments=[];
        };
        post.getComments = function(){
          if(angular.isDefined(post.postValue.id)){
            blogFactory.getComments(post.postValue.id).then(function(data){
               post.postValue.comments=data;
            });
          }
       };

        post.initialize();
    };

})(window.angular);
