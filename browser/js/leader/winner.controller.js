app.controller('winnerCtrl', function($scope, $stateParams, WinnerFactory){
  WinnerFactory.findWinner($stateParams.obj[0])
  .then(function(data){
    $scope.winner = data;
  })

})

