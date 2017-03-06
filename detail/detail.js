'use strict';

angular.module('myApp.detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:did', {
    templateUrl: 'detail/detail.html',
    controller: 'detail'
  });
}])

.controller('detail', ['$scope','$routeParams','$http',function($scope,$routeParams,$http){
    $http.get('data/dish_getbyid.php?did='+$routeParams.did).success(function(data){
      $scope.detail = data;
    });
}]);