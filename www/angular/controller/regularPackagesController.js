dreamtour.controller('RegularPackagesController', ['$scope', '$http','cfpLoadingBar', '$window',
  function RegularPackagesController($scope, $http, cfpLoadingBar, $window) 
{
    $scope.packages = {};
    $scope.package = {};
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

    $scope.detail = function(index)
    {
        $scope.package = $scope.packages[index];
        $scope.state = 'detail';

        console.log($scope.package);
    }

    $scope.prevPage = function()
    {
        if($scope.state == 'detail')
            $scope.state = 'list-regular';
        else
            $window.location.href = '/pilihpaket.html';
    }


}]);
