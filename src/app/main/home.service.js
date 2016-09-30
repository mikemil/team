(function() {
  'use strict';

angular.module('team').service('homeService', function ($http) {
   var svc = this;

   svc.getMembers = function() {
     return $http.get('http://localhost:5000/members');
   }

   svc.addMember = function(user) {
     return $http.post('http://localhost:5000/members', user);
   }

   svc.getMember = function(memberId) {
     return $http.get('http://localhost:5000/members/'+memberId);
   }

   svc.deleteMember = function(memberId) {
     return $http.delete('http://localhost:5000/members/'+memberId);
   }

});

})();
