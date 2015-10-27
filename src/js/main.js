;(function(){ // START IIFE
  angular.module('bitter-fit', ['ngRoute'], function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html'
      })
      .when('/login', {
        templateUrl: 'partials/login.html'
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html'
      })
      .when('/activity', {
        templateUrl: 'partials/activity.html'
      })
      .when('/add-activity', {
        templateUrl: 'partials/add-activity.html'
      })
      .when('/edit-activity', {
        templateUrl: 'partials/edit-activity.html'
      })
      .when('/chart', {
        templateUrl: 'partials/chart.html' // TODO: activity title links to chart.html
      });
  })
  ; // END angular.module
})(); // END IIFE

$('.activity-tabs > a').on('click', function(){
  var panelId = $(this).attr('href');

  $(this).add(panelId)
    .addClass('active')
  .siblings()
    .removeClass('active');

  }).filter('[href="#activity"]')
    .trigger('click');
