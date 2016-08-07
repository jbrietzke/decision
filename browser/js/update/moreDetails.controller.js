app.controller('moreDetailsCtrl', function($scope, $stateParams, MoreDetailsFactory, $state, $log){
  $scope.state = $stateParams.obj;
  MoreDetailsFactory.getUserInfo($scope.state)
  .then(function(res){
    $scope.info = res;
  })
  $scope.edited = {};
  $scope.update = function(){
    MoreDetailsFactory.updateUserInfo($scope.edited, $scope.state)
    .then(function(res){
      $state.go('update');
    })
    .catch($log.error)
  }
})
