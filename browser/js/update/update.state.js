app.config(function ($stateProvider) {
    $stateProvider.state('update', {
        url: '/update',
        templateUrl: 'js/update/update.html',
        controller : 'updateCtrl',
        resolve : {
          allUsers : function(UserFactory){
            return UserFactory.getAllUsers();
          }
        }
    });
});
