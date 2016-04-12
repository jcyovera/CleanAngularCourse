(function (angular) {
  'use strict';

  angular
      .module('myApp.blog')
      .controller('BlogController', BlogController);
  BlogController.$inject = ['blogFactory'];
  function BlogController(blogFactory) {
    var blog = this;
    blog.title = "AngularJS Blog App";
    blog.posts = {};
    blog.initialize=function(){
      blog.showPosts=true;
      blogFactory.getPosts().then(function(data){
         blog.posts = data;
       });
    };
    blog.openPost=function(currentPost){
      blog.selectedPost=currentPost;
      blog.showPosts=false;
      console.log(currentPost);
    };

    blog.initialize();
  };
})(window.angular);
