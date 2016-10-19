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

      homeService.getMembers().then(function (dataResponse) {
          scores.members = dataResponse.data;
          scores.addNameToScore();
          //scores.createNameMap();
      }) 
    })

    // homeService.getMembers().then(function (dataResponse) {
    //   scores.members = dataResponse.data;
    //   scores.createNameMap();
    // })
   
    scores.addNameToScore = function () {
       for (var i = 0; i < scores.meet.members.length; i++) {
        var id = scores.meet.members[i].id;
        
        for (var x = 0; x < scores.members.length; x++ ) {
          if (id === scores.members[x].id) {
              scores.meet.members[i].name = scores.members[x].firstName + ' ' + scores.members[x].lastName;
              console.log('setting name: '+scores.meet.members[x])
          }
        }
      }
    }


    scores.createNameMap = function() {
      var arrayLength = scores.members.length;
      for (var i = 0; i < arrayLength; i++) {
        var key = scores.members[i].id.toString();
        var value = scores.members[i].firstName + ' ' + scores.members[i].lastName;
        scores.nameMap[key] = value;
      }
      console.log("nameMap: "+scores.nameMap);
    }

  }

})();
