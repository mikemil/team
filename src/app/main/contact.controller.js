(function() {
  'use strict';

  angular
    .module('team')
    .controller('ContactController',  ContactController);

  /** @ngInject */
  function ContactController($scope) {
    var contact = this;

    contact.message = "If you would like to contact us about the website, please use the information below.";
    
  }

})();
