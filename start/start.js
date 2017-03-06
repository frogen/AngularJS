'use strict';

angular.module('myApp.start', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/start', {
    templateUrl: 'start/start.html',
    controller: 'start'
  });
}])

.controller('start', ['$scope','$location',function($scope,$location) {
  $scope.goMain=function(){
    $location.path('/main/');
  }
}]);