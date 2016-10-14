(function() {
  'use strict';

  angular.module('team').controller('ScoresController',  ScoresController);

  /** @ngInject */
  function ScoresController($scope, $routeParams, scoresService, homeService) {
    var scores = this;

    scores.meetId = $routeParams.id;
    scores.meet = null;
    scores.members = null;
    scores.nameMap = {}; 

    scoresService.getScores(scores.meetId).then(function(dataResponse) {
      scores.meet = dataResponse.data;
      console.log('getScores() response:'+scores.meet);
    })

    homeService.getMembers().then(function (dataResponse) {
      scores.members = dataResponse.data;
      scores.createNameMap();
    })
   
    scores.createNameMap = function() {
      var arrayLength = scores.members.length;
      for (var i = 0; i < arrayLength; i++) {
        var key = scores.members[i].id;
        var value = scores.members[i].firstName + ' ' + scores.members[i].lastName;
        scores.nameMap.key = value;
      }
      console.log("nameMap: "+scores.nameMap);
    }

  }

})();
