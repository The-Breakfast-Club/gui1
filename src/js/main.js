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

  .run(function($http, $rootScope){ // inputs data for activity placeholders
    $http.get('https://mysterious-hollows-8407.herokuapp.com:443/api/activities/')
    // $http.get('/api/activities.json')
      .then(function(response){
        $rootScope.activities = response.data;
      });
  }) // END activity placeholders
  //START
  .run(function($http, $rootScope){
   $http.get('https://mysterious-hollows-8407.herokuapp.com:443/api/users/');
 })
 .controller('signupController', function($scope, $http){
   $scope.signinvalues= {
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
   };

   $scope.submit= function(){
     console.log("please God please work");
     $http.post('https://mysterious-hollows-8407.herokuapp.com:443/api/users/', $scope.signinvalues)
     .then(function (){

     });
   };
 })
  //END
  ; // END angular.module
})(); // END IIFE



// ACTIVITY/ADD-ACTIVITY TABS
// $('.activity-tabs > a').on('click', function(){
//   var panelId = $(this).attr('href');
//
//   $(this).add(panelId)
//     .addClass('active')
//   .siblings()
//     .removeClass('active');
//
//   }).filter('[href="#activity"]')
//     .trigger('click');

// jquery for tabs
$('#login').click(function() {
  $('#login').addClass('active');
  $('#signup').removeClass('active');
});

$('#signup').click(function() {
  $('#signup').addClass('active');
  $('#login').removeClass('active');
});
