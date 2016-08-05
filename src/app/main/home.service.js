(function() {
  'use strict';

angular.module('team').service('homeService', function ($http) {
   var svc = this;

   svc.getMembers = function() {
     //console.log('in the svc.getMembers function...');
     return $http( { method: 'GET', url: 'http://localhost:5000/members' }  );
   }

});

})();
