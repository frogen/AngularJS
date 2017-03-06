'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.start',
  'myApp.main',
  'myApp.detail',
  'myApp.order',
  'myApp.myorder'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/start'});
}])
  .controller('publicCtrl', ['$scope','$location',function($scope,$location) {
    $scope.headerFile='public/header.html';
    $scope.footerFile='public/footer.html';
    $scope.goHome=function(){
      $location.path("/start/");
    };
    $scope.goMyOrder=function(){
      $location.path("/myorder/");
    };
    $scope.goDetail=function(){
      $location.path("/main/");
    }
  }]);
