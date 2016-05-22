dreamtour.controller('NewsletterController', ['$scope', '$http','cfpLoadingBar', 
  function NewsletterController($scope, $http, cfpLoadingBar) 
{
    $scope.newsletters = {};
    // Get Packages
    $http(
    {
        url     : host +  "getNewsletter",
        method  : "GET",
    })
    .success(function(data)
    {
        $scope.newsletters = data;
        //console.log($scope.packages);
    })
    .error(function (error)
    {
        console.log(error);
    });


}]);
