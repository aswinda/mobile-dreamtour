var dreamtour = angular.module('dreamtour', ['chieffancypants.loadingBar','ui.router', 'satellizer']);

dreamtour.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});

dreamtour.config(function($stateProvider, $urlRouterProvider, $authProvider) 
{
    // Satellizer configuration that specifies which API
    // route the JWT should be retrieved from
    $authProvider.baseUrl = '/';
    $authProvider.httpInterceptor = function() { return true; };
    $authProvider.loginUrl = 'http://mobile-dreamtour.com/api/authenticate';

    // Redirect to the auth state if any other states
    // are requested other than users
    $urlRouterProvider.otherwise('/');

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