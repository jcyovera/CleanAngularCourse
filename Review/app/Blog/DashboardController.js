angular.module('DemoAngular.dashboard')
.controller('DashboardController', ['$scope','blogFactory','$route','$routeParams','$http','$location',
function($scope,blogFactory,$route,$routeParams,$http,$location) {
  var blog = this;
     blog.title = "AngularJS Blog App";
     blog.posts = {};
     blogFactory.getPosts().then(function(data){
       blog.posts = data;
       loadComments();
     });
     blog.getComments=function(id,index){
       blogFactory.getComments(id).then(function(data){
           blog.posts[index].comments=data;
       });
     }

     var loadComments= function(){
       var i = 0,
       postsLength =  blog.posts.length;
            for (; i < postsLength; i++) {
                blog.posts[i].comments={};
                blog.getComments(blog.posts[i].id,i);
            }
     };

     blog.addLike=function(post){
       post.likes=post.likes+1;
       var postLike={
         likes:post.likes
       }
       blogFactory.addLike(post.id,postLike).then(function(data){
         console.log(data);
       });
     };

     blog.tab = 'blog';
     blog.selectTab = function(setTab){
       blog.tab = setTab;
       console.log(blog.tab)
     };
     blog.isSelected = function(checkTab){
       return blog.tab === checkTab;
     };

}])
