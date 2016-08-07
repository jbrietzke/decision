app.controller('updateCtrl', function($scope, allUsers, $state){
  $scope.allUsers = allUsers;
  $scope.moreDetails = function(userId){
    $state.go('moreDetails', {obj : userId})
  }
})

