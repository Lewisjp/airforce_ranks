'use struct';

var airforcerankApp = angular.module('airforcerankApp',[
		'ngRoute',
		'airforcerankControllers'
	]);

airforcerankApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/ranks', {
				templateUrl: 'partials/rank-list.html',
				controller: 'AirForceRankListCtrl'
			}).
			when('/ranks/:rankId', {
				templateUrl: 'partials/rank-detail.html',
				controller: 'AirForceRankDetailCtrl'
			}).
			otherwise({
				redirectTo: '/ranks'
			});
	}]);

