'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'main'
  });
}])
.controller('main', ['$scope','$http',function($scope,$http) {
    $scope.hasMore=true;
    $http.get('data/dish_getbypage.php?start=0').success(function(data){
      $scope.dishList = data;
    });
    $scope.add=function(){
      $http.get('data/dish_getbypage.php?start='+$scope.dishList.length).success(function(data){
        $scope.dishList= $scope.dishList.concat(data);
        if(data.length<5){
          $scope.hasMore=false;
        }
      });
    };
    $scope.$watch('kw',function(){
      if($scope.kw){
        $http.get('data/dish_getbykw.php?kw='+$scope.kw).success(function(data){
          console.log(data);
          $scope.dishList=data;
        });
      }else{
        $http.get('data/dish_getbypage.php?start=0').success(function(data){
          $scope.dishList = data;
        });
      }
    });
  }]);