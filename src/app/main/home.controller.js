(function() {
  'use strict';

  angular
    .module('team')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, homeService) {
    var home = this;

    home.members = null;

    homeService.getMembers().then(function (dataResponse) {
      home.members = dataResponse;
    })

    home.selectedMember = null;

    home.setSelectedMember = function (id) {
        //console.log('setting selectedMember='+id);
        home.selectedMember = id;
        //console.log('selectedMember='+home.selectedMember);
    }

  }

})();
