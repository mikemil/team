/* global malarkey:false, moment:false, restConfig:false */
(function() {
  'use strict';

  angular
    .module('team')
    .constant('malarkey', malarkey)
    .constant('restConfig', {url: 'http://localhost', port: 5000} )
    .constant('moment', moment);

})();
