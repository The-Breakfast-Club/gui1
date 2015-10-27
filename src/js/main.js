;(function(){ // START IIFE
  angular.module('bitter-fit', ['ngRoute'], function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'login.html'
      })
      .when('/login', {
        templateUrl: 'login.html'
      })
      .when('/signup', {
        templateUrl: 'signup.html'
      })
      .when('/activity', {
        templateUrl: 'activity.html'
      })
      .when('/add-activity', {
        templateUrl: 'add-activity.html'
      })
      .when('/edit-activity', {
        templateUrl: 'edit-activity.html'
      })
      .when('/chart', {
        templateUrl: 'chart.html' // TODO: activity title links to chart.html
      });
  })
  ; // END MODULE
})(); // END IIFE
