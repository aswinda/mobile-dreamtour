dreamtour.controller('ChatRoomController', ['$scope', '$http','cfpLoadingBar', '$auth', 
  function ChatRoomController($scope, $http, cfpLoadingBar, $auth) 
{
    $scope.rooms = {};
    // Get Room
    $http(
    {
        url     : host +  "getChatRoom",
        method  : "GET",
        params  : { id : localStorage.getItem('user') }
    })
    .success(function(data)
    {
        $scope.rooms = data;
        console.log($scope.rooms);

        // var user = localStorage.getItem('user');
        // console.log(user);
    })
    .error(function (error)
    {
        console.log(error);
    });


    
}]);
