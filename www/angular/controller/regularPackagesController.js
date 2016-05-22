dreamtour.controller('RegularPackagesController', ['$scope', '$http','cfpLoadingBar', 
  function RegularPackagesController($scope, $http, cfpLoadingBar) 
{
    $scope.packages = {};
    $scope.state = 'list-regular';
    // Get Packages
    $http(
    {
        url     : host +  "getRegularPackages",
        method  : "GET",
    })
    .success(function(data)
    {
        $scope.packages = data;
        console.log($scope.packages);
    })
    .error(function (error)
    {
        console.log(error);
    });


}]);
