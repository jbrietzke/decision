app.config(function ($stateProvider) {
    $stateProvider.state('winner', {
        url: '/winner',
        templateUrl: 'js/leader/winner.html',
        controller : 'winnerCtrl',
        params : {
            obj : null
        }
    });
});
