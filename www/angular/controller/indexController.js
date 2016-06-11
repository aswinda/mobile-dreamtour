dreamtour.controller('IndexController', ['$scope', '$http','cfpLoadingBar', 
  function IndexController($scope, $http, cfpLoadingBar) 
{
    $scope.data = {};
    $scope.submited = 'false';
    $scope.gcm_id = '';

    $scope.init = function()
    {
        $scope.gcm_id = $("#gcm_id").val();
    }
    
}]);
