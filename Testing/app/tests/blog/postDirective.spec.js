describe("post Directive", function () {
    'use strict';

    var $scope, $compile, postTemplate,$httpBackend,$controller,blogFactory,$route,expectedTemplate,$q;

    beforeEach(function () {
        postTemplate = '<div post-directive post-value="selectedPost" show-post="showPosts">';
    });

    describe("directive", function () {
        beforeEach(function () {
            module('myApp.blog', [
               '$controllerProvider', function($controllerProvider) {
                   $controllerProvider.register('PostController', function () {
                       // Fake controller stub.
                       this.backPage = jasmine.createSpy('PostController.backPage');
                       this.initialize = jasmine.createSpy('PostController.initialize');
                       this.getComments = jasmine.createSpy('PostController.getComments');
                   });
               }
           ]);

            inject(['$injector', function ($injector) {
                $scope = $injector.get('$rootScope').$new();
                $compile = $injector.get('$compile');
                $httpBackend = $injector.get('$httpBackend');

            }]);
            expectedTemplate = "<div>TEST</div>";
            $httpBackend.whenGET('blog/post/postTemplate.html').respond(expectedTemplate);
        });
        afterEach(function() {
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        });
        it("should compile the directive", function () {
            // Act
            var postElement = $compile(postTemplate)($scope);
            $httpBackend.flush(1);
            // Assert
            expect(postElement.html()).toContain(expectedTemplate);

        });
        it("should call the controller's 'initialize' function when the directive initializes", function () {
            // Act
            var postElement = $compile(postTemplate)($scope);
            $httpBackend.flush(1);
            var postController = postElement.controller('postDirective');
            $scope.$digest();
            // Assert
            expect(postController.initialize).toBeDefined();

        });
        it("should call the controller's 'getComment' function when the directive update showPost attribute", function () {
          $scope.selectedPost={};
          $scope.showPosts=false;
            // Act
            var postElement = $compile(postTemplate)($scope);
            $httpBackend.flush(1);
            var postController = postElement.controller('postDirective');
            $scope.$digest();
            // Assert
            expect(postController.getComments).toHaveBeenCalled();

        });

    });

    describe("controller", function () {
        var PostController, $httpBackend,deferredGetcomments;

        beforeEach(function () {

            module('myApp.blog');

            inject(['$injector', function ($injector) {
                $scope = $injector.get('$rootScope').$new();
                $compile = $injector.get('$compile');
                $controller = $injector.get('$controller');
                $q = $injector.get('$q');
                $httpBackend = $injector.get('$httpBackend');
            }]);
            deferredGetcomments = $q.defer();
            blogFactory={
               getComments : jasmine.createSpy('blogFactory.getComments').and.returnValue(deferredGetcomments.promise)
            };
            $route={
              reload:jasmine.createSpy('$route.reload')
            }
            PostController = $controller('PostController as post', {
              $scope:$scope,
              blogFactory:blogFactory,
              $route :$route
            });
            expectedTemplate = "<div>TEST</div>";
            $httpBackend.whenGET('blog/post/postTemplate.html').respond(expectedTemplate);
        });
        it("should call the method backPage", function () {
          //Act
            var postElement = $compile(postTemplate)($scope);
            $httpBackend.flush(1);
            var postController = postElement.controller('postDirective');
            PostController.backPage();
            // Assert
            expect($route.reload).toHaveBeenCalled();
        });
        it("should call the method initialize", function () {
          //Act
            var postElement = $compile(postTemplate)($scope);
            $httpBackend.flush(1);
            var postController = postElement.controller('postDirective');
            PostController.initialize();
            // Assert
            expect(PostController.postValue.comments).toEqual([]);
        });

      });

  });
