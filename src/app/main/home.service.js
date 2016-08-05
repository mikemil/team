(function() {
  'use strict';

angular.module('team').service('homeService', function ($http) {
   var svc = this;

   svc.getMembers = function() {
     console.log('in the svc.getMembers function...');
     return $http( { method: 'GET', url: 'http://localhost:5000/members' }  );
   }

});

  // angular
  //   .module('team')
  //   .service('HomeService', HomeService);

  // /** @ngInject */
  // function HomeService($scope) {
  //   var homeSvc = this;

  //   homeSvc.getMembers = function() {
  //       return homeSvc.members;
  //   }

  //   homeSvc.members = [
  //       {
  //          "id": 1,
  //          "firstName": "Elena",
  //          "lastName":  "Miller",
  //          "addressLine1": "2713 River Bend Trail",
  //          "city": "Flower Mound",
  //          "state": "Texas",
  //          "zip": "75022",
  //          "dob": "10/05/2007"
  //       },
  //        {
  //          "id": 2,
  //          "firstName": "Gracie",
  //          "lastName":  "Smith",
  //          "addressLine1": "7809 Independence Parkway",
  //          "city": "Plano",
  //          "state": "Texas",
  //          "zip": "75067",
  //          "dob": "08/19/2007"
  //       },
  //        {
  //            "id": 3,
  //          "firstName": "Brinley",
  //          "lastName":  "Whats-her-name",
  //          "addressLine1": "3011 Plano Parkway",
  //          "city": "Plano",
  //          "state": "Texas",
  //          "zip": "75066",
  //          "dob": "12/12/2008"
  //       },
  //        {
  //             "id": 4,
  //          "firstName": "Madison",
  //          "lastName":  "Kocian",
  //          "addressLine1": "4567 Strait Lane",
  //          "city": "Dallas",
  //          "state": "Texas",
  //          "zip": "75211",
  //          "dob": "09/30/2001"
  //       },
  //        {
  //             "id": 5,
  //          "firstName": "Gabby",
  //          "lastName":  "Douglas",
  //          "addressLine1": "8713 Santo Domingo Way",
  //          "addressLine2": "Suite 999",
  //          "city": "Santa Clara",
  //          "state": "California",
  //          "zip": "12033",
  //          "dob": "03/08/2001"
  //       },
  //        {
  //             "id": 6,
  //          "firstName": "Aly",
  //          "lastName":  "Raisman",
  //          "addressLine1": "23 Bunker Hill Road",
  //          "addressLine2": "Apt 101",
  //          "city": "Boston",
  //          "state": "Massachusetts",
  //          "zip": "65908",
  //          "dob": "02/02/2001"
  //       },
  //        {
  //             "id": 7,
  //          "firstName": "Simone",
  //          "lastName":  "Biles",
  //          "addressLine1": "1 Ranch Way",
  //          "city": "Spring",
  //          "state": "Texas",
  //          "zip": "76099",
  //          "dob": "01/01/2001"
  //       },
  //        {
  //             "id": 8,
  //          "firstName": "Sofia",
  //          "lastName":  "Liukin",
  //          "addressLine1": "1 Main Street",
  //          "addressLine2": "Protege Suite",
  //          "city": "Plano",
  //          "state": "Texas",
  //          "zip": "75024",
  //          "dob": "06/11/2008"
  //       },
  //        {
  //             "id": 9,
  //          "firstName": "Jaylee",
  //          "lastName":  "Down",
  //          "addressLine1": "713 Teacher Lane",
  //          "city": "Highland Village",
  //          "state": "Texas",
  //          "zip": "75088",
  //          "dob": "11/25/2008"
  //       }
        
  //   ]

  // }

})();
