'use strict';

describe('DemoAngular.home module', function() {

  beforeEach(module('myApp.home'));

  describe('home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('HomeController');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
