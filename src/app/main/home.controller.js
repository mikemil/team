(function() {
  'use strict';

  angular
    .module('team')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, homeService) {
    var home = this;
    home.showAddForm = false;
    home.members = null;
    home.member = {
       'firstname': null,
       'lastname': null
    };

    homeService.getMembers().then(function (dataResponse) {
      home.members = dataResponse;
    })

    home.selectedMember = null;

    home.setSelectedMember = function (id) {
        home.selectedMember = id;
    }

    $scope.submit = function() {
      console.log("submit called, f="+$scope.member.firstname);
      $scope.showAddForm = false;
    }

  }

})();
