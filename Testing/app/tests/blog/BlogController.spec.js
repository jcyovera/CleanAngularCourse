'use strict';

describe('myApp.blog module', function() {
  var view1Controller,$rootScope,  $controller,$q,$scope,blogFactory,
      deferredPost ;

beforeEach(function () {
  module('myApp.blog');
    inject([
              '$injector', function($injector) {
                  $rootScope = $injector.get('$rootScope');
                  $controller = $injector.get('$controller');
                  $q = $injector.get('$q');
              }
  ]);
  deferredPost = $q.defer();
  $scope = $rootScope.$new();
  blogFactory = {
            getPosts: jasmine.createSpy('getPosts').and.returnValue(deferredPost.promise)
  };
  view1Controller = $controller('BlogController', {
           blogFactory: blogFactory
  });

});

  describe('blog controller', function(){
    it("should load the controller", function() {
      //spec body
      var blogController = view1Controller;
      expect(blogController).toBeDefined();
    });

    describe("initialization", function() {
        var expectedPost;
        beforeEach(function () {
            expectedPost = [
              {
                 "id": 1,
                 "title": "Blog Post One",
                 "body": [
                   "Lorem ipsume, tenetur.",
                   "Numquam nque delectus doluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                   "Quibusdinim commodi odio placeat minus, error id?",
                   "Corrupti vcia, ia , quia eius."
                 ],
                 "author": "Nick Moreton",
                 "likes": 9,
                 "image": "http://placekitten.com/g/2000/600",
                 "createdOn": 1408547127216
               }
            ]
            deferredPost.resolve(expectedPost);
        });

        it("should load posts by default", function() {
            // Arrange
            var blogController = view1Controller;
            // Act
            $scope.$digest();

            // Assert
            expect(blogController.posts).toBe(expectedPost);
        });
    });
  });

});
