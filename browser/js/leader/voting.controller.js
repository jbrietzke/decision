app.controller('votingCtrl', function($scope, $stateParams, $state){
  $scope.contestants = $stateParams.obj;
  console.log($scope.contestants);
  $scope.upVote = function(name){
    $scope.contestants.forEach(function(e,i,a){
      if (e[0] === name) {
        e[1] += 13;
      }
    })
    console.log(name);
    console.log('Good Vote');
    console.log($scope.contestants);
  };
  $scope.downVote = function(name){
    $scope.contestants.forEach(function(e,i,a){
      if (e[0] === name) {
        e[1] -= 6;
      }
    })
    console.log(name);
    console.log('Down Vote');
  };

  $scope.neutral = function(name){
    $scope.contestants.forEach(function(e,i,a){
      if (e[0] === name) {
        e[1] += 2;
      }
    })
    console.log(name);
    console.log('Down Vote');
  };

  $scope.winner = function(){
     $scope.contestants.sort(compareSecondColumn).reverse();
     $state.go('winner', {obj : $scope.contestants[0]});
    }

  function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
  }
})
