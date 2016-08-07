app.controller('leaderCtrl', function($scope, allUsers, $state){
  $scope.selectedUsers = {};
  $scope.allUsers = allUsers;
  $scope.array = [];
  var max = 25;
  var min = 0;
  $scope.findLeader = function(){
    var x = $scope.selectedCategory;
    if (x === 'dining') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].id);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].dining));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }else if (x === 'music') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].id);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].music));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }else if (x === 'boardGames') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].id);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].boardGames));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }

    $scope.array.sort(compareSecondColumn).reverse();

    console.log($scope.array);
      $state.go('winner', {obj : $scope.array[0]});




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

