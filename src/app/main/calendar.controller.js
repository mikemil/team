(function() {
  'use strict';

  angular.module('team').controller('CalendarController',  CalendarController);

  /** @ngInject */
  function CalendarController($scope) {
    var calendar = this;

    calendar.message = "Welcome to the website.  This is just a quick site put together to learn AngularJS 1.x";
    
    $scope.dateClick = function(date) {
        // console.log('dateClick event received:'+event.title);
        console.log('dateClick event triggered');
    }

    $scope.eventClick = function(date) {
        // console.log('eventClick: '+event.title);
        console.log('eventClick triggered for '+date.event.title );
        alert('Event: '+date.event.title);
    }
    
    $scope.calendarOptions = {
        defaultDate: "2016-08-19",
        minDate: new Date(),
        maxDate: new Date([2017, 12, 31]),
        dayNamesLength: 3, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
        multiEventDates: true, // Set the calendar to render multiple events in the same day or only one event, default is false
        maxEventsPerDay: 1, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
        eventClick: $scope.eventClick,
        dateClick: $scope.dateClick
    };

    $scope.events = [
      {title: 'Golden Grips Classic', date: new Date([2016, 8, 27])},
      {title: 'Golden Grips Classic2', date: new Date([2016, 8, 27])},
      {title: 'Golden Grips Classic3', date: new Date([2016, 8, 27])},
      {title: 'WOGA Frisco Qualifier', date: new Date([2016, 8, 28])},
      {title: 'Level 3/4/5 Qualifier', date: new Date([2016, 9, 10])},
      {title: 'North Texas State Meet', date: new Date([2016, 9, 24])},
    ];
    
  }

})();
