(function() {
  'use strict';

  angular
    .module('team')
    .controller('EventsController', EventsController);

  /** @ngInject */
  function EventsController($scope, eventsService)   {
    var events = this;

    events.events = null;
    events.meets = null;

    eventsService.getEvents().then(function (dataResponse) {
      events.events = dataResponse;
      console.log("events: "+events.events.dataResponse);
    })

    eventsService.getMeets().then(function (dataResponse) {
      events.meets = dataResponse.data;
      console.log("meets: "+events.meets);
    })

  }

})();
