dreamtour.controller('CustomerServiceController', ['$scope', '$http','cfpLoadingBar', '$timeout', '$auth', 
  function CustomerServiceController($scope, $http, cfpLoadingBar, $timeout, $auth) 
{
    $scope.chats = {};
    $scope.user_id = localStorage.getItem('user');
    $scope.message = '';
    // Get Room
    $scope.onTimeout = function()
    {
        $http(
        {
            url     : host +  "getChat",
            method  : "GET",
            params  : { id : parameter.id }
        })
        .success(function(data)
        {
            $scope.chats = data;
            //console.log('refresh');
        })
        .error(function (error)
        {
            console.log(error);
        });

        
        // var scroller = document.getElementById("autoscroll");
        // scroller.scrollTop = scroller.scrollHeight;
        // console.log(scroller.scrollTop + ' ' + scroller.scrollHeight);
        mytimeout = $timeout($scope.onTimeout,2000);
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.push = function(data)
    {
        $http(
        {
            url     : host +  "pushChat",
            method  : "GET",
            params  : { id : parameter.id, user : $scope.user_id, message : data }
        })
        .success(function(data)
        {
            //$scope.chats = data;
            $scope.message = '';
            
        })
        .error(function (error)
        {
            console.log(error);
        });
    }
}]);
