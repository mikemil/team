(function() {
  'use strict';

angular.module('team').service('scoresService', ['$http', 'restConfig', function ($http, restConfig) {
   var scores = this;

   scores.getScores = function(meetId) {
     console.log('getting scores for meet:'+ meetId);
    return $http( { method: 'GET', url: restConfig.url+':'+restConfig.port+'/scores/'+meetId }  );
   }


}]);

})();
