'use strict';

describe('myApp.blog module', function() {

  beforeEach(module('myApp.blog'));

  describe('blog controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('BlogController');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});
