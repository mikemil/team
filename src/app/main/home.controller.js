(function() {
  'use strict';

  angular
    .module('team')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, homeService) {
    var home = this;
    home.showAddForm = false;
    home.addResponse = null;
    home.members = null;
    home.member = {
       'firstName': null,
       'lastName': null
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
      homeService.addMember($scope.member).then(function(dataResponse) {
        home.addResponse = dataResponse;
      })
      $scope.showAddForm = false;
    }

    $scope.setShowAddFormFlag = function(flag) {
      console.log('setting showAddForm flag to '+flag);
       home.showAddForm = flag;
    }

  }

})();
