(function (angular) {
  angular
      .module('myApp.blog')
      .controller('BlogController', BlogController);
  BlogController.$inject = ['blogFactory'];
  function BlogController(blogFactory) {

  };
})(window.angular);
