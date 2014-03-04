'use strict';

/* jasmine specs for directives go here */

describe('airforceranks controllers', function() {
  beforeEach(module('airforceranksApp'));
 
  describe('AirForceRanksListCtrl', function(){
 
    it('should create "phones" model with 3 phones', inject(function($controller) {
      var scope = {},
          ctrl = $controller('AirForceRanksListCtrl', { $scope: scope });
 
      expect(scope.phones.length).toBe(14);
    }));
  });
});