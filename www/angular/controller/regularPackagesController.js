dreamtour.controller('RegularPackagesController', ['$scope', '$http','cfpLoadingBar', '$window',
  function RegularPackagesController($scope, $http, cfpLoadingBar, $window)
{
    $scope.packages = {};
    $scope.package = {};
    $scope.state = 'list-regular';
    $scope.pop = false;

    $scope.pop_style = {'bottom': '0'};

    $scope.perjalanan = {};
    // Get Packages
    $http(
    {
        url     : host +  "getRegularPackages",
        method  : "GET",
    })
    .success(function(data)
    {
        $scope.packages = data;
        //console.log($scope.packages);
    })
    .error(function (error)
    {
        console.log(error);
    });

    $scope.detail = function(index)
    {
        $scope.package = $scope.packages[index];
        $scope.state = 'detail';

        $http(
        {
            url     : host +  "getPerjalanan",
            method  : "GET",
            params  : { id : $scope.package.id }
        })
        .success(function(data)
        {
            $scope.perjalanan = data;
            console.log($scope.perjalanan);
        })
        .error(function (error)
        {
            console.log(error);
        });

        //console.log($scope.package);
    }

    $scope.prevPage = function()
    {
        if($scope.state == 'detail')
            $scope.state = 'list-regular';
        else
            $window.location.href = '/pilihpaket.html';
    }

    $scope.popClick = function()
    {
        $scope.pop = !$scope.pop;
    }
}]);
