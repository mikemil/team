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
      home.members = dataResponse.data;
    })

    home.selectedMember = null;

    home.setSelectedMember = function (id) {
        home.selectedMember = id;
    }

    home.submit = function() {
      homeService.addMember($scope.member).then(function(dataResponse) {
        console.log('success')
        home.members.push($scope.member);
        home.resetForm();
      })
      home.showAddForm = false;
    }

    home.setShowAddFormFlag = function(flag) {
       console.log('setting showAddForm flag to '+flag);
       home.showAddForm = flag;
    }

    home.resetForm = function () {
      $scope.myform.$setPristine();
    };


    $scope.$watchCollection('home.members', function(newList, oldList) {
      console.log('newList='+newList);
      console.log('oldList='+oldList);
    });

  }

})();
