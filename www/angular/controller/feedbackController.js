dreamtour.controller('FeedbackController', ['$scope', '$http','cfpLoadingBar',
  function FeedbackController($scope, $http, cfpLoadingBar)
{
    $scope.data = {};
    $scope.submited = false;

    $scope.submit = function(feedback)
    {
        //console.log(feedback);

        $http(
        {
            url     : host +  "postFeedback",
            method  : "GET",
            params    : feedback
        })
        .success(function(data)
        {
            $scope.submited = true;
            //alert('Success submit feedback')
            //console.log(data);
        })
        .error(function (error)
        {
            console.log(error);
        });
    }

}]);
