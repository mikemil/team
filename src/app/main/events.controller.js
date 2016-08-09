(function() {
  'use strict';

  angular
    .module('team')
    .controller('EventsController', EventsController);

  /** @ngInject */
  function EventsController($scope, eventsService)   {
    var events = this;

    events.events = null;

    eventsService.getEvents().then(function (dataResponse) {
      events.events = dataResponse;
      console.log("events: "+events.events.dataResponse);
    })

  }

})();
