dreamtour.controller('DoaController', ['$scope', '$http','cfpLoadingBar', 
  function DoaController($scope, $http, cfpLoadingBar) 
{
    $scope.doas = [{name : "Doa Musafir Kepada Orang Yang Ditinggalkan", images : ['doa1.png']}, 
                    { name : "Doa Orang Yang Mukim Kepada Musafir", images : ['2.jpg']}, 
                    { name : "Doa Naik Kendaraan", images : ['doa_2.PNG']}, 
                    { name : "Doa Safar (Bepergian Jauh)", images : ['doa_3.PNG', 'doa_3_b.PNG']}];
    
}]);
