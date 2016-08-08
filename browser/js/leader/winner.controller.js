app.controller('winnerCtrl', function($scope, $stateParams, WinnerFactory){
  $scope.winner = $stateParams.obj[0];

})

