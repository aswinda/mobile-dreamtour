angular.module('DreamtourMobile', [
  'ngRoute',
  'mobile-angular-ui',
  'DreamtourMobile.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});