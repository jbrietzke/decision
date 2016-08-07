app.controller('createUserCtrl', function($scope, UserFactory, $state, $log){
  $scope.newUser = {};

  $scope.createNew = function(){
    UserFactory.createNewUser($scope.newUser)
    .then(function(res){
      $state.go('home');
    })
    .catch($log.error)
  }
})


