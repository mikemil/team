(function() {
  'use strict';

angular.module('team').service('eventsService', function ($http) {
   var svc = this;

   svc.getEvents = function() {
     return $http( { method: 'GET', url: 'http://localhost:3000/events' }  );
   }


// TODO - add a new method that takes the id and gets
//        a single member based on the id
//        that will be called by the details controller but 
//        still in this service!

});

})();
