'use strict';

var airforcerankControllers = angular.module('airforcerankControllers',[]);

airforcerankControllers.controller('AirForceRankListCtrl', ['$scope','$http',
  function($scope, $http) {
    $http.get('ranks/ranks.json').success(function(data){
      $scope.ranks = data;
  });

    $scope.orderProp = 'payGrade';
}]);

airforcerankControllers.controller('AirForceRankDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		debugger
	$http.get('ranks/' + $routeParams.rankId + '.json').success(function(data){
		$scope.ranks = data[0];
	});
}]);

//abbrev

//'ranks/' + $routeParams.abbrev + '.json'
