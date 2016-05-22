var dreamtour = angular.module('dreamtour', ['chieffancypants.loadingBar']);

dreamtour.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});

var host = 'http://mobile-dreamtour.com/api/';