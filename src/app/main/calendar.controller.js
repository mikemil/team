(function() {
  'use strict';

  angular.module('team').controller('CalendarController',  CalendarController);

  /** @ngInject */
  function CalendarController($scope) {
    var calendar = this;

    calendar.message = "Welcome to the website.  This is just a quick site put together to learn AngularJS 1.x";

    $scope.calendarOptions = {
        defaultDate: "2016-10-10",
        minDate: new Date(),
        maxDate: new Date([2020, 12, 31]),
        dayNamesLength: 3, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
        multiEventDates: true, // Set the calendar to render multiple events in the same day or only one event, default is false
        maxEventsPerDay: 3, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
        eventClick: $scope.eventClick,
        dateClick: $scope.dateClick
    };

    $scope.events = [
      {title: 'WOGA Plano', date: new Date([2016, 8, 27])},
      {title: 'WOGA Frisco', date: new Date([2016, 8, 28])}
    ];
    
  }

})();
