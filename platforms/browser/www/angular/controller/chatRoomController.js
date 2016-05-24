dreamtour.controller('ChatRoomController', ['$scope', '$http','cfpLoadingBar', 
  function ChatRoomController($scope, $http, cfpLoadingBar) 
{
    $scope.rooms = {};
    // Get Room
    $http(
    {
        url     : host +  "getChatRoom",
        method  : "GET",
        params  : { id : 1 }
    })
    .success(function(data)
    {
        $scope.rooms = data;
        console.log($scope.rooms);
    })
    .error(function (error)
    {
        console.log(error);
    });


    
}]);
