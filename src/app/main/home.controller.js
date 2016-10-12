(function() {
  'use strict';

  angular
    .module('team')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, homeService) {
    var home = this;
    home.showAddForm = false;
    home.showAddScores = false;
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

    home.addMemberScores = function(memberId) {
      // more to do here!!!
      home.showAddScores = true;
      home.showAddForm = false;
    }

    home.submitScores = function() {
      home.showAddScores = false;
    }

    home.setShowAddFormFlag = function(flag) {
       home.showAddForm = flag;
    }

    home.setShowAddScores = function(scoreFlag, addFormFlag) {
       home.showAddScores = scoreFlag;
       home.showAddForm = addFormFlag;
    }

    home.resetForm = function () {
      $scope.myform.$setPristine();
    }

    home.deleteMember = function(id, index) {
      homeService.deleteMember(id).then(function (dataResponse) {
        var deleted = home.members.splice(index, 1);
        console.log('deleted: '+deleted);
      })
    }

    $scope.$watchCollection('home.members', function(newList, oldList) {
    });

  }

})();
