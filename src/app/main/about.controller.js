(function() {
  'use strict';

  angular
    .module('team')
    .controller('AboutController',  AboutController);

  /** @ngInject */
  function AboutController($scope) {
    var about = this;

    about.message = "Welcome to the website.  This is just a quick site put together to learn AngularJS 1.x";
    
  }

})();
