(function() {
  'use strict';

angular.module('team').service('homeService', function ($http) {
   var svc = this;

   svc.getMembers = function() {
     //console.log('in the svc.getMembers function...');
     return $http( { method: 'GET', url: 'http://localhost:5000/members' }  );
   }


// TODO - add a new method that takes the id and gets
//        a single member based on the id
//        that will be called by the details controller but 
//        still in this service!

});

})();
