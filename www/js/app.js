var dreamtour = angular.module('dreamtour', ['chieffancypants.loadingBar']);

dreamtour.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});

dreamtour.filter('html', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

var host = 'http://mobile-dreamtour.com/api/';