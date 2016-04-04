(function (angular) {
    angular
        .module('DemoAngular.home')
        .factory('ProfileFactory', ProfileFactory);
    ProfileFactory.$inject = ['$http'];
    function ProfileFactory($http, momentFactory) {
        'use strict';
        var token='?client_id=5dea1dbd4f824cba974e&client_secret=f0c3023b3e31d0ac03c78eeb9cc0e522046f11fc';
        return {
            getProfile: function () {
              var tokenUrl='https://api.github.com/users/jcyovera'+token;
                return $http({
                    method: 'GET',
                    url: tokenUrl
                }).then(function (response) {
                    return response.data;
                });
            },
            getRepos: function (url) {
              var tokenUrl=url+token;
                return $http({
                    method: 'GET',
                    url: tokenUrl
                }).then(function (response) {
                    return response.data;
                });
            }
        };
    }
})(window.angular);
