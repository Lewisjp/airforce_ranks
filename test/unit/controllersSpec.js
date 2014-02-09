'use strict';

/* jasmine specs for controllers go here */

// Below we are testing that we have 14 ranks on file for the scope of this angular project

describe('AirForceRank controllers', function(){

	describe('AirForceRankCtrl', function(){

		it('should create "rank" model with a description', function(){
				var scope = {},
					ctrl = new AirForceRank(scope);
				expect(scope.rank.length).toBe(14);
		});
	});
});
