(function() {
  'use strict';

  angular.module('team').controller('CalendarController',  CalendarController);

  /** @ngInject */
  function CalendarController($scope, eventsService) {
    var calendar = this;

    $scope.dateClick = function(date) {
        console.log('dateClick event triggered');
        var evt = prompt("Enter event name", "");
    
        if (evt != null) {
           var evtDt = new Date([date.year, date.month, date.day]);
           console.log('Add event: '+evt+ ' on date: '+ evtDt);
        }
    }

    $scope.eventClick = function(date) {
        // console.log('eventClick: '+event.title);
        console.log('eventClick triggered for '+date.event.title );
        alert('Event: '+date.event.title);
    }
    
    $scope.calendarOptions = {
        defaultDate: "2016-08-19",
        minDate: new Date(),
        maxDate: new Date(2017, 11, 31),
        dayNamesLength: 3, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
        multiEventDates: true, // Set the calendar to render multiple events in the same day or only one event, default is false
        maxEventsPerDay: 1, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
        eventClick: $scope.eventClick,
        dateClick: $scope.dateClick
    };

    $scope.eventsHide = [
      {title: 'Golden Grips Classic', date: new Date([2016, 08, 25])},
      {title: 'Golden Grips Classic2', date: new Date([2016, 08, 26])},
      {title: 'Golden Grips Classic3', date: new Date([2016, 08, 27])},
      {title: 'WOGA Frisco Qualifier', date: new Date([2016, 08, 28])},
      {title: 'Level 3/4/5 Qualifier', date: new Date([2016, 09, 10])},
      {title: 'North Texas State Meet', date: new Date([2016, 09, 24])},
    ];

    $scope.events = null;

    eventsService.getEvents().then(function (dataResponse) {
      $scope.events = dataResponse.data;
      console.log('in calendarcontroller events: '+$scope.events);
    })
    
  }

})();
