'use strict';

angular.module('myApp.myorder', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myorder', {
    templateUrl: 'myorder/myorder.html',
    controller: 'myorder'
  });
}])
.controller('myorder', ['$scope','$http','$routeParams','$rootScope',function($scope,$http,$routeParams,$rootScope) {
   if($rootScope.phone){
     $http.get('data/order_getbyphone.php?phone='+ $rootScope.phone)
       .success(function(data){
         $scope.menu=data;
         console.log(data);
       });
   }else {
     //console.log('您尚未下单！尚未记录电话号码！');
   }
}]);