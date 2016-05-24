dreamtour.controller('ChatController', ['$scope', '$http','cfpLoadingBar', '$timeout', 
  function ChatController($scope, $http, cfpLoadingBar, $timeout) 
{
    $scope.chats = {};
    $scope.user_id = 1;
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
            console.log('refresh');
        })
        .error(function (error)
        {
            console.log(error);
        });

        console.log('refresh');
        mytimeout = $timeout($scope.onTimeout,1000);
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
}]);
