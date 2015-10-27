;(function(){ // START IIFE
  angular.module('bitter-fit', ['ngRoute'], function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'login.html'
      })
      .when('/login.html', {
        templateUrl: 'login.html'
      })
      .when('/activity', {
        templateUrl: 'activity.html'
      })
      .when('/chart', {
        templateUrl: 'chart.html' // TODO: activity title links to chart.html
      });
  })
  ; // END MODULE
})(); // END IIFE
