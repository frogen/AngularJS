'use strict';

angular.module('myApp.order', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order/:did', {
    templateUrl: 'order/order.html',
    controller: 'order'
  });
}]).run(function($http){
    $http.defaults.headers.post = {'Content-Type':'application/x-www-form-urlencoded'};
  })
.controller('order', ['$scope','$routeParams','$http','$timeout','$rootScope','$location',function($scope,$routeParams,$http,$timeout,$rootScope,$location) {
    $scope.order={did: $routeParams.did};
    $scope.order_menu=true;
    $scope.submitOrder = function(){
     // console.log('当前表单中的数据：');
     // console.log($scope.order);
      $rootScope.phone = $scope.order.phone;
      var result = jQuery.param($scope.order);
      //console.log(result);
      $http.post('data/order_add.php',result)
        .success(function(data){
         // console.log('接收到服务器返回的订单添加结果消息：');
         // console.log(data);
        });
      $timeout(function(){ $scope.order_menu=false;},1000);
      $timeout(function(){ $location.path('/myorder/')},3000);
    };
}]);