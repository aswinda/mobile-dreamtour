dreamtour.controller('CustomerServiceController', ['$scope', '$http','cfpLoadingBar', '$timeout', '$auth', 
  function CustomerServiceController($scope, $http, cfpLoadingBar, $timeout, $auth) 
{
    $scope.chats = {};
    $scope.user_id = localStorage.getItem('user');
    $scope.message = '';

    $scope.cs_group_id = localStorage.getItem('cs_group_id');
    alert($scope.cs_group_id);

    $scope.init = function()
    {
        // Get customer group chat id
        if($scope.cs_group_id == null)
        {
            var gcm_id = localStorage.getItem('gcm_id');

            $http(
            {
                url     : host +  "getCsGroup",
                method  : "GET",
                params  : { gcm_id : gcm_id }
            })
            .success(function(data)
            {
                $scope.cs_group_id = data;

                var group = JSON.stringify(data);
                localStorage.setItem('cs_group_id', group);
            })
            .error(function (error)
            {
                console.log(error);
            });
        }
    }
    
    // Get Room
    $scope.onTimeout = function()
    {
        $http(
        {
            url     : host +  "getCsChat",
            method  : "GET",
            params  : { id : $scope.cs_group_id }
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
            url     : host +  "pushCsChat",
            method  : "GET",
            params  : { id : $scope.cs_group_id, message : data }
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
