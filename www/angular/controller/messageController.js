dreamtour.controller('MessageController', ['$scope', '$http','cfpLoadingBar', '$timeout', '$auth',
  function MessageController($scope, $http, cfpLoadingBar, $timeout, $auth)
{
    $scope.chats = {};
    //$scope.user_id = localStorage.getItem('user');
    $scope.user_id = 1;
    $scope.message = '';
    $scope.init = {};

    $scope.randomString = function()
    {
        var length = 255;
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    $scope.cs_id = localStorage.getItem('cs_id');
    alert("get cs id " + cs_id);
    if($scope.cs_id == null || $scope.cs_id == '' || $scope.cs_id === undefined)
    {
        alert('generete id');
        $scope.cs_id = $scope.randomString();
        alert("kalau null " + cs_id);
        var cs_id = JSON.stringify($scope.cs_id);
        localStorage.setItem('cs_id', cs_id);
    }

    // $scope.cs_group_id = localStorage.getItem('cs_group_id');
    // $scope.cs_id = localStorage.getItem('cs_id');

    $scope.cs_group_id = '';
    //$scope.cs_id = 'fJlM_yTiYfA:APA91bGRH6y5srzttHGuexpGty6MXYPBRgk8DZA7nLqxaes-RGellayPiAG1CJwuSKzda3aVIq3rk9IGahuAMxGdsf_3GtGW_h8OQGOzXJelP7H9lr5at_wJbWH7jDwunDsAEKnRrFdH';

    if($scope.cs_group_id == null || $scope.cs_group_id == '')
    {
        var gcm_id = $scope.cs_id;

        alert("get cs didalem " + gcm_id);

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

    // $scope.init = function()
    // {
    //     // Get customer group chat id

    // }

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
            $scope.init = 'tambah';
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
