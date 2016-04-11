(function (angular) {
  angular
      .module('myApp.blog')
      .controller('BlogController', BlogController);
  BlogController.$inject = ['$http'];
  function BlogController($http) {

  };
})(window.angular);
