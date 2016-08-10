dreamtour.controller('TipsController', ['$scope', '$http','cfpLoadingBar', 
  function TipsController($scope, $http, cfpLoadingBar) 
{
    $scope.doas = [{name : "Tips Perjalanan Umrah", images : ['tips_perjalanan_umrah.JPG', 'tips_perjalanan_umrah_2.JPG']}, 
                    { name : "Tips Bugar Saat Ibadah", images : ['tips_bugar_saat_ibadah.JPG']}, 
                    { name : "Tips Hindari Sakit Batuk", images : ['tips_hindari_sakit_batuk.JPG']}, 
                    { name : "Tips Hindari Influenza", images : ['tips_hindari_influenza.JPG']}, 
                    { name : "Tips Membawa Barang", images : ['tips_membawa_barang.JPG']},
                    { name : "Tips di Bandara", images : ['tips_di_bandara.JPG']},
                    { name : "AWAS COPET!!", images : ['awas_copet.JPG']},
                    { name : "Tips Saat Tawaf", images : ['tips_saat_tawaf.JPG']},
                    { name : "Tips Agar Tidak Tersesat", images : ['tips_agar_tidak_tersesat.JPG']},
                    { name : "Tips Masuk Masjid Agar Tidak Tersesat", images : ['tips_masuk_masjid_agar_tidak_tersesat.JPG']},
                    { name : "Tips Mencium Hajar Aswad", images : ['tips_mencium_hajar_aswad.JPG']},
                    { name : "Tips Tawaf dan Sa'i", images : ['tips_tawaf_dan_sai.JPG']},
                    { name : "Tips Meyimpan Uang", images : ['tips_menyimpan_uang.JPG']},
                    { name : "Tips di Hotel", images : ['tips_di_hotel.JPG']},
                    { name : "Tips Kebugaran saat Ibadah Haji", images : ['tips_kebugaran_saat_ibadah_haji.JPG']},
                    { name : "Tips Shalat di Masjid Nabawi", images : ['tips_shalat_di_masjid_nabawi.JPG']},
                    { name : "Tips Nyaman Beribadah", images : ['tips_nyaman_beribadah.JPG']},
                    { name : "MIQAT IHRAM", images : ['miqat_ihram_1.JPG', 'miqat_ihram_2.JPG']},
                    { name : "Larangan IHRAM", images : ['larangan_ihram_1.JPG', 'larangan_ihram_2.JPG', 'larangan_ihram_3.JPG', 'larangan_ihram_4.JPG', 'larangan_ihram_5.JPG']},
                    { name : "IHRAM", images : ['ihram_1.JPG', 'ihram_2.JPG', 'ihram_3.JPG', 'ihram_4.JPG', 'ihram_5.JPG', 'ihram_6.JPG']},
                    { name : "Cara Menshalatkan Mayit", images : ['cara_menshalatkan_mayit_1.JPG', 'cara_menshalatkan_mayit_2.JPG', 'cara_menshalatkan_mayit_3.JPG', 'cara_menshalatkan_mayit_4.JPG', 'cara_menshalatkan_mayit_5.JPG', 'cara_menshalatkan_mayit_6.JPG', 'cara_menshalatkan_mayit_7.JPG', 'cara_menshalatkan_mayit_8.JPG', 'cara_menshalatkan_mayit_9.JPG', 'cara_menshalatkan_mayit_10.JPG']}
            ];
    $scope.doa = parameter.id;
    //console.log($scope.doa);    
}]);
