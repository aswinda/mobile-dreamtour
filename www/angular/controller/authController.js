dreamtour.controller('AuthController', ['$scope', '$http','cfpLoadingBar', '$auth',
  function AuthController($scope, $http, cfpLoadingBar, $auth)
{
    $scope.data = {};
    $scope.currentUser = {};
    $scope.user_id = localStorage.getItem('user');
    $scope.gcm_id = localStorage.getItem('gcm_id');
    $scope.skiped = true;

    $scope.message = '';
    $scope.waited = false;

    // Get gcm_id on first load
    if($scope.gcm_id == null || $scope.gcm_id =="")
    {
        $scope.gcm_id = $("#gcm_id").val();
        var gcm = JSON.stringify($scope.gcm_id);
        localStorage.setItem('gcm_id', gcm);
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

        }, function(error) {
            console.log(error);
            $scope.message = 'Username atau password salah!';
            $scope.waited = false;
        });


        //$scope.skiped = true;
    }

    $scope.skip = function()
    {
        $scope.skiped = true;
    }


}]);
