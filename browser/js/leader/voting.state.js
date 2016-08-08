app.config(function ($stateProvider) {
    $stateProvider.state('voting', {
        url: '/voting',
        templateUrl: 'js/leader/voting.html',
        controller : 'votingCtrl',
        params : {
            obj : null
        }
    });
});

