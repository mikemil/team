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
   
  }

})();
