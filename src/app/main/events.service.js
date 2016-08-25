(function() {
  'use strict';

angular.module('team').service('eventsService', ['$http', 'restConfig', function ($http, restConfig) {
   var svc = this;

   svc.getEvents = function() {
     console.log('getting events...');
    return $http( { method: 'GET', url: restConfig.url+':'+restConfig.port+'/events' }  );
   }

//TODO need to add function for POST - to create new Event

}]);

})();
