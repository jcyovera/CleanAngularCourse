describe("post Directive", function () {
    'use strict';

    var $scope, $compile, $window, postTemplate,$httpBackend,postController,$controller,blogFactory,$route;

    beforeEach(function () {
        postTemplate = '<div post-directive post-value="selectedPost" show-post="showPosts">';
    });

    describe("directive", function () {
        beforeEach(function () {
          blogFactory={};
            module('myApp.blog');

            inject(['$injector', function ($injector) {
              $controller = $injector.get('$controller');
                $scope = $injector.get('$rootScope').$new();
                $compile = $injector.get('$compile');
                $window = $injector.get('$window');
                $httpBackend = $injector.get('$httpBackend');
                $route = $injector.get('$route');
            }]);
            $httpBackend.whenGET('blog/post/postTemplate.html').respond("<div>{{post.postValue.id}}</div>");
            postController = $controller('PostController'){
              $scope: $scope,
              blogFactory:blogFactory,
              $route:$route
            };
        });

        it("should call the controller's 'initialize' function when the directive initializes", function () {
          $scope.selectedPost={};
          $scope.showPosts=false;
            // Act
            var postElement = $compile(postTemplate)($scope);
            //var postController = postElement.controller('postDirective');
            $scope.$digest();
            // Assert
            expect(postController.initialize).toHaveBeenCalled();

        });

        xit("shouldn't call the controller's 'resize' function when the directive initializes", function () {
            // Act
            var postElement = $compile(postTemplate)($scope);
            //var postController = postElement.controller('postDirective');
            // Assert
            expect(postController.getComments).not.toHaveBeenCalled();
        });

    });
  });
