describe("blog Factory", function () {
    'use strict';

    var $httpBackend, blogFactory;

    beforeEach(function () {

        //Module definition and inject providers
        module("myApp.blog");

        inject(['$injector', function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            blogFactory = $injector.get('blogFactory');
        }]);
    });
    afterEach(function () {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });
    describe("getPosts", function () {
        var getPostsUrl = 'http://localhost:3000/posts', expectedPost;
        beforeEach(function() {
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
        });

        it("should load all posts from server", function () {
            // Arrange
            var expectedResponse = expectedPost,
                actualResponse;

            $httpBackend.expectGET(getPostsUrl).respond(expectedResponse);
            // Act
            blogFactory.getPosts().then(function (responsePosts) {
                actualResponse = responsePosts;
            });
            $httpBackend.flush(1);

            // Assert
            expect(actualResponse).toEqual(expectedResponse);
        });
      });
});
