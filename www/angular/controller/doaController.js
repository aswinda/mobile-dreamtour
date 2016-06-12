dreamtour.controller('DoaController', ['$scope', '$http','cfpLoadingBar', 
  function DoaController($scope, $http, cfpLoadingBar) 
{
    $scope.doas = [{name : "Doa Musafir Kepada Orang Yang Ditinggalkan", images : ['doa1.png']}, 
                    { name : "Doa Orang Yang Mukim Kepada Musafir", images : ['2.jpg']}, 
                    { name : "Doa Naik Kendaraan", images : ['doa_2.PNG']}, 
                    { name : "Doa Safar (Bepergian Jauh)", images : ['doa_3.PNG', 'doa_3_b.PNG']}, 
                    { name : "Doa Pergi (Berjalan) Ke Masjid", images : ['doa_4_a.PNG', 'doa_4_b.PNG']},
                    { name : "Doa Masuk Masjid", images : ['doa_5_a.PNG', 'doa_5_b.PNG']},
                    { name : "Doa Keluar Dari Masjid", images : ['doa_6.PNG']},
                    { name : "Doa Pembangunan", images : ['doa_7.PNG']},
                    { name : "Doa Sapu Jagad", images : ['doa_8.PNG']},
                    { name : "Doa Tabah Menghadapi Lawan", images : ['doa_9.PNG']},
                    { name : "Doa Keselamatan", images : ['doa_10.PNG']},
                    { name : "Doa Menghindari Kesesatan", images : ['doa_11.PNG']},
                    { name : "Doa Kekuatan Iman", images : ['doa_12.PNG']},
                    { name : "Husnul Khâtimah (akhir yang baik)", images : ['doa_13.PNG']},
                    { name : "Doa Penyesalan", images : ['doa_14.PNG']},
                    { name : "Doa Tolak Neraka", images : ['doa_15.PNG']},
                    { name : "Doa Mohon Keadilan", images : ['doa_16.PNG']},
                    { name : "Doa Mohon Keselamatan", images : ['doa_17.PNG']},
                    { name : "Doa Mohon Perlindungan", images : ['doa_18.PNG']},
                    { name : "Doa Keluarga Maslahah", images : ['doa_19.PNG']},
                    { name : "Doa Mohon Tempat yang Baik", images : ['doa_20.PNG']},
                    { name : "Doa Mohon diberi Kemudahan", images : ['doa_21.PNG']},
                    { name : "Doa Kelapangan hati", images : ['doa_22.PNG']},
                    { name : "Doa Mohon Jodoh dan Keturunan yang Baik", images : ['doa_23.PNG']},
                    { name : "Doa Mohon Terlepas dari Musibah", images : ['doa_24.PNG']},
                    { name : "Doa Mohon Kemuliaan", images : ['doa_25.PNG']}
                ];
    
}]);
