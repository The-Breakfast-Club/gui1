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


// jquery for tabs

$('#login').click(function() {
  $('#login').addClass('active')
  $('#signup').removeClass('active')
});

$('#signup').click(function() {
  $('#signup').addClass('active')
  $('#login').removeClass('active')
});


// angular for login form
.run(function($http, $rootScope){
  $http.get('filepath')

.controller('loginController', function($scope, $http){
  $scope.loginvalues= {
    name: "",
    password: ""
  };

  $scope.submit= function(){
    $http.post("filepath", $scope.loginvalues)
    .then(function (){

    });
  };
})


// angular for signup form
.run(function($http, $rootScope){
  $http.get('filepath')

.controller('signupController', function($scope, $http){
  $scope.signinvalues= {
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  };

  $scope.submit= function(){
    $http.post("filepath", $scope.signinvalues)
    .then(function (){

    });
  };
})
