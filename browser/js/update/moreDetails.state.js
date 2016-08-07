app.config(function ($stateProvider) {
    $stateProvider.state('moreDetails', {
        url: '/moreDetails',
        templateUrl: 'js/update/moreDetails.html',
        controller : 'moreDetailsCtrl',
        params : {
            obj : null
        }
    });
});
