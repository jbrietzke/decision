app.config(function ($stateProvider) {
    $stateProvider.state('user', {
        url: '/user',
        templateUrl: 'js/users/user.html',
        controller : 'userCtrl',
        resolve : {
          allUsers : function(UserFactory){
            return UserFactory.getAllUsers();
          }
        }
    });
});
