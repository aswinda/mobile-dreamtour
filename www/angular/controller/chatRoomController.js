dreamtour.controller('ChatRoomController', ['$scope', '$http','cfpLoadingBar', '$auth',
  function ChatRoomController($scope, $http, cfpLoadingBar, $auth)
{
    $scope.rooms = {};

    $scope.form_login = false;
    $scope.user_id = localStorage.getItem('user');
    $scope.gcm_id = localStorage.getItem('gcm_id');

    $scope.message = '';
    $scope.waited = false;

    $scope.currentUser = {};

    // Get Room
    if($scope.user_id != null)
    {
        $http(
        {
            url     : host +  "getChatRoom",
            method  : "GET",
            params  : { id : localStorage.getItem('user') }
        })
        .success(function(data)
        {
            $scope.rooms = data;
            //console.log($scope.rooms);

            // var user = localStorage.getItem('user');
            // console.log(user);
        })
        .error(function (error)
        {
            console.log(error);
        });
    }
    else
    {
        $scope.form_login = true;
        //alert(form_login);
    }

    $scope.login = function()
    {
        $scope.waited = true;
        $scope.message = '';

        var credentials = {
            email: $scope.data.email,
            password: $scope.data.password
        }

        console.log(credentials);

        // Use Satellizer's $auth service to login
        $auth.login(credentials).then(function(data) {

            // If login is successful, redirect to the users state
            console.log(data);
            var user = JSON.stringify(data.data.user);

            // Set the stringified user data into local storage
            localStorage.setItem('user', user);

            // Putting the user's data on $rootScope allows
            // us to access it anywhere across the app
            $scope.currentUser = data.data.user;

            var user1 = localStorage.getItem('user');
            console.log(user1);

            $scope.waited = false;
            $scope.user_id = localStorage.getItem('user');

            $http(
            {
                url     : host +  "getChatRoom",
                method  : "GET",
                params  : { id : localStorage.getItem('user') }
            })
            .success(function(data)
            {
                $scope.rooms = data;
                $scope.form_login = false;
            })
            .error(function (error)
            {
                console.log(error);
            });

        }, function(error) {
            console.log(error);
            $scope.message = 'Passport atau password salah!';
            $scope.waited = false;
        });


        //$scope.skiped = true;
    }

}]);
