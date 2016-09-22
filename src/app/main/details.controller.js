(function() {
  'use strict';

  angular.module('team').controller('DetailsController',  DetailsController);

  /** @ngInject */
  function DetailsController($scope, $routeParams, homeService) {
    var details = this;

    // currently using as index not the id - until we lookup the members
    // using the GET request - so minus 1 to get index
    //details.selectedMember = $routeParams.id - 1;
    details.selectedMember = $routeParams.id;

    homeService.getMember(details.selectedMember).then(function(dataResponse) {
      details.member = dataResponse.data;
    })
    // details.members = [
    //     {
    //        "id": 1,
    //        "firstName": "Elena",
    //        "lastName":  "Miller",
    //        "addressLine1": "2713 River Bend Trail",
    //        "city": "Flower Mound",
    //        "state": "Texas",
    //        "zip": "75022",
    //        "dob": "10/05/2007",
    //       "accompolishments": [
    //          { "description": "TAF Level 4 1st All-Around, Best Gymnastics Meet" },
    //          { "description": "TAF Level 4 6th All-Around, State Meet" },
    //          { "description": "TAF Level 4 1st Place Balance Beam, 9.70 score" }
    //       ]
    //     },
    //      {
    //        "id": 2,
    //        "firstName": "Gracie",
    //        "lastName":  "Smith",
    //        "addressLine1": "7809 Independence Parkway",
    //        "city": "Plano",
    //        "state": "Texas",
    //        "zip": "75067",
    //        "dob": "08/19/2007",
    //        "accompolishments": [
    //          { "description": "USAG Level 3 1st All-Around, WOGA Gymnastics Meet" },
    //          { "description": "USAG Level 3 3rd All-Around, State Meet" },
    //          { "description": "USAG Level 3 1st Place Floor, 9.55 score" }
    //       ]
    //     },
    //      {
    //          "id": 3,
    //        "firstName": "Brinley",
    //        "lastName":  "Whats-her-name",
    //        "addressLine1": "3011 Plano Parkway",
    //        "city": "Plano",
    //        "state": "Texas",
    //        "zip": "75066",
    //        "dob": "12/12/2008",
    //        "accompolishments": [
    //          { "description": "USAG Level 3 1st place Vault WOGA Meet" }
    //       ]
    //     },
    //      {
    //        "id": 4,
    //        "firstName": "Madison",
    //        "lastName":  "Kocian",
    //        "addressLine1": "4567 Strait Lane",
    //        "city": "Dallas",
    //        "state": "Texas",
    //        "zip": "75211",
    //        "dob": "09/30/2001",
    //        "accompolishments": [
    //          { "description": "National Champion 2015 Uneven bars" },
    //          { "description": "National Champion 2015 Balance Beam" },
    //          { "description": "2016 USA Team Olympic Gold Medalist" }
    //       ]
    //     },
    //      {
    //           "id": 5,
    //        "firstName": "Gabby",
    //        "lastName":  "Douglas",
    //        "addressLine1": "8713 Santo Domingo Way",
    //        "addressLine2": "Suite 999",
    //        "city": "Santa Clara",
    //        "state": "California",
    //        "zip": "12033",
    //        "dob": "03/08/2001",
    //        "accompolishments": [
    //          { "description": "2012 Olympic Gold Medalist 1st All-Around" },
    //          { "description": "2012 USA Team Olympic Gold Medalist" }
    //       ]
    //     },
    //      {
    //        "id": 6,
    //        "firstName": "Aly",
    //        "lastName":  "Raisman",
    //        "addressLine1": "23 Bunker Hill Road",
    //        "addressLine2": "Apt 101",
    //        "city": "Boston",
    //        "state": "Massachusetts",
    //        "zip": "65908",
    //        "dob": "02/02/2001",
    //        "accompolishments": [
    //         { "description": "2012 Olympic Gold Medalist Floor" },
    //         { "description": "2012 USA Team Olympic Gold Medalist" }
    //       ]
    //     },
    //      {
    //        "id": 7,
    //        "firstName": "Simone",
    //        "lastName":  "Biles",
    //        "addressLine1": "1 Ranch Way",
    //        "city": "Spring",
    //        "state": "Texas",
    //        "zip": "76099",
    //        "dob": "01/01/2001",
    //          "accompolishments": [
    //             { "description": "2012 National Champion 1st All-Around" },
    //             { "description": "2013 National Champion 1st All-Around" },
    //             { "description": "2014 National Champion 1st All-Around" },
    //             { "description": "2015 National Champion 1st All-Around" }
    //          ]
    //     },
    //      {
    //        "id": 8,
    //        "firstName": "Sofia",
    //        "lastName":  "Liukin",
    //        "addressLine1": "1 Main Street",
    //        "addressLine2": "Protege Suite",
    //        "city": "Plano",
    //        "state": "Texas",
    //        "zip": "75024",
    //        "dob": "06/11/2008",
    //        "accompolishments": [
    //          { "description": "2015 USAG 3rd place All-Around" }
    //       ]
    //     },
    //      {
    //        "id": 9,
    //        "firstName": "Jaylee",
    //        "lastName":  "Down",
    //        "addressLine1": "713 Teacher Lane",
    //        "city": "Highland Village",
    //        "state": "Texas",
    //        "zip": "75088",
    //        "dob": "11/25/2008",
    //        "accompolishments": [
    //          { "description": "2015 TAF Level 3 Champion" }
    //       ]
    //     }
    // ]
  }

})();
