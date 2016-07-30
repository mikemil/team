(function() {
  'use strict';

  angular
    .module('team')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/home', {
        templateUrl: 'app/main/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'app/main/about.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'app/main/contact.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/details', {
        templateUrl: 'app/main/details.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
       .when('/calendar', {
        templateUrl: 'app/main/calendar.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
