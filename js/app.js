angular.module('IAMHUN',['ng','ngRoute','ngAnimate'])
  .config(function($routeProvider){
    $routeProvider
      .when('/start',{
      templateUrl:'tpl/start.html'
      })
      .when('/main',{
        templateUrl:'tpl/myorder.html'
      })
      .when('/detail',{
        templateUrl:'tpl/myorder.html'
      })
  });