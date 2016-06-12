dreamtour.controller('DoaDetailController', ['$scope', '$http','cfpLoadingBar', 
  function DoaDetailController($scope, $http, cfpLoadingBar) 
{
    $scope.doas = [{name : "Doa Musafir Kepada Orang Yang Ditinggalkan", images : ['doa1.png']}, 
                    { name : "Doa Orang Yang Mukim Kepada Musafir", images : ['2.jpg']}, 
                    { name : "Doa Naik Kendaraan", images : ['doa_2.PNG']}];
    $scope.doa = parameter.id;
    //console.log($scope.doa);    
}]);
