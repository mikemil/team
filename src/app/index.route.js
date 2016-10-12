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
      .when('/addscores', {
        templateUrl: 'app/main/addscores.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/events', {
        templateUrl: 'app/main/events.html',
        controller: 'EventsController',
        controllerAs: 'events'
      })
      .when('/about', {
        templateUrl: 'app/main/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'app/main/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .when('/details/:id', {
        templateUrl: 'app/main/details.html',
        controller: 'DetailsController',
        controllerAs: 'details'
      })
       .when('/calendar', {
        templateUrl: 'app/main/calendar.html',
        controller: 'CalendarController',
        controllerAs: 'calendar'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
