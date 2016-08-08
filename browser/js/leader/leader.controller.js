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
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].dining));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'music') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].music));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'boardGames') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].boardGames));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'parties') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].parties));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'videoGames') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].videoGames));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'movies') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].movies));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'vacations') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].vacations));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'projects') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].projects));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'events') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].events));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'weekendNight') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].weekendNight));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    if (x === 'weekdayNight') {
      $scope.selectedUsers.forEach(function(e,i,a){
        var minArr = [];
        minArr.push($scope.allUsers[e-1].firstName);
        var total = Math.floor(Math.random() * (max-min) + min + ($scope.allUsers[e-1].weekdayNight));
        minArr.push(total);
        $scope.array.push(minArr);
      })

    }
    console.log($scope.array);
  $state.go('voting', {obj : $scope.array});
  }

})

