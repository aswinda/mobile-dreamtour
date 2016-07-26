dreamtour.controller('DoaUmrohController', ['$scope', '$http','cfpLoadingBar', 
  function DoaUmrohController($scope, $http, cfpLoadingBar) 
{
    $scope.doas = [{name : "Doa Tawaf Putaran Pertama", images : ['doa_tawaf_putaran_pertama_1.JPG', 'doa_tawaf_putaran_pertama_2.JPG', 'doa_tawaf_putaran_pertama_3.JPG']}, 
                    { name : "Doa Tawaf Putaran Kedua", images : ['doa_tawaf_putaran_kedua_1.JPG', 'doa_tawaf_putaran_kedua_2.JPG', 'doa_tawaf_putaran_kedua_3.JPG']}, 
                    { name : "Doa Tawaf Putaran Ketiga", images : ['doa_tawaf_putaran_ketiga_1.JPG', 'doa_tawaf_putaran_ketiga_2.JPG', 'doa_tawaf_putaran_ketiga_3.JPG']}, 
                    { name : "Doa Tawaf Putaran Keempat", images : ['doa_tawaf_putaran_keempat_1.JPG', 'doa_tawaf_putaran_keempat_2.JPG', 'doa_tawaf_putaran_keempat_3.JPG']}, 
                    { name : "Doa Tawaf Putaran Kelima", images : ['doa_tawaf_putaran_kelima.JPG']},
                    { name : "Doa Tawaf Putaran Keenam", images : ['doa_tawaf_putaran_keenam.JPG']},
                    { name : "Doa Tawaf Putaran Ketujuh", images : ['doa_tawaf_putaran_ketujuh.JPG']}
                ];
     $scope.doa = parameter.id;
}]);
