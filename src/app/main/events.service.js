(function() {
  'use strict';

angular.module('team').service('eventsService', ['$http', 'restConfig', function ($http, restConfig) {
   var svc = this;

   svc.getEvents = function() {
     console.log('getting events...');
    return $http( { method: 'GET', url: restConfig.url+':'+restConfig.port+'/events' }  );
   }

//TODO need to add function for POST - to create new Event
  svc.create = function(evt) {
    console.log('creating event:'+evt.title+' for date: '+evt.date);
    return $http.post(restConfig.url+':'+restConfig.port+'/events', evt  );
    // return $http( { method: 'POST', url: restConfig.url+':'+restConfig.port+'/events' }, evt  );
  }


}]);

})();
