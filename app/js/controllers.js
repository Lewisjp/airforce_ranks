var airforcerankApp = angular.module('airforcerankApp',[]);

airforcerankApp.controller('AirForceRankCtrl', ['$scope','$http',
  function ($scope, $http) {
    $http.get('ranks/ranks.json').success(function(data){
      $scope.ranks = data;
  });

    $scope.orderProp = 'payGrade';
}]);