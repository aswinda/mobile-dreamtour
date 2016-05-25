var dreamtour = angular.module('dreamtour', ['chieffancypants.loadingBar']);

dreamtour.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});

dreamtour.directive('schrollBottom', function () {
  return {
    scope: {
      schrollBottom: "="
    },
    link: function (scope, element) {
      scope.$watchCollection('schrollBottom', function (newValue) {
        if (newValue)
        {
          $(element).scrollTop($(element)[0].scrollHeight + 200);
        }
      });
    }
  }
})

dreamtour.filter('html', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

var host = 'http://mobile-dreamtour.com/api/';