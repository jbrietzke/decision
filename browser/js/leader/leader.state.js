app.config(function ($stateProvider) {
    $stateProvider.state('leader', {
        url: '/leader',
        templateUrl: 'js/leader/leader.html',
        controller : 'leaderCtrl',
        resolve : {
          allUsers : function(UserFactory){
            return UserFactory.getAllUsers();
          }
        }
    });
});
