(function (angular) {
    angular
        .module('myApp.blog')
        .factory('blogFactory', blogFactory);
    blogFactory.$inject = ['$http'];
    function blogFactory($http) {
        'use strict';

        return {
            getPosts: function () {
              var url='http://localhost:3000/posts';
                return $http({
                    method: 'GET',
                    url: url
                }).then(function (response) {
                    return response.data;
                });
            },
            addPosts: function (newPost) {
              var url='http://localhost:3000/posts';
                return $http({
                    method: 'POST',
                    url: url,
                    data :newPost,
                }).then(function (response) {
                    return response.data;
                });
            },
            getComments: function (postId) {
              var url='http://localhost:3000/comments'+ '?postId='+postId.toString();
                return $http({
                    method: 'GET',
                    url: url
                }).then(function (response) {
                    return response.data;
                });
            },
            addComment: function (newComment) {
              var url='http://localhost:3000/comments';
                return $http({
                    method: 'POST',
                    url: url,
                    data :newComment,
                }).then(function (response) {
                    return response.data;
                });
            },
            addLike: function (postId,patchPost) {
              var url='http://localhost:3000/posts/'+postId;
                return $http({
                    method: 'PATCH',
                    url: url,
                    data :patchPost,
                }).then(function (response) {
                    return response.data;
                });
            },
        };
    }
})(window.angular);
