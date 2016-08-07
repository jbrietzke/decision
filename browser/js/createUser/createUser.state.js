
app.config(function ($stateProvider) {
    $stateProvider.state('createUser', {
        url: '/createUser',
        templateUrl: 'js/createUser/createUser.html',
        controller : 'createUserCtrl'
    });
});
