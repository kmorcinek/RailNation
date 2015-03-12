(function () {
    'use strict';

    function MainCtrl($scope) {
        $scope.options = [
            { value: 17, name: 'Zboże' },
            { value: 17, name: 'Węgiel' },
            { value: 42, name: 'Żelazo' },
            { value: 17, name: 'Drewno' },
            { value: 30, name: 'Deski' },
            { value: 25, name: 'Ruda żelaza' },
            { value: 28, name: 'Bawełna' },
            { value: 31, name: 'Bydło' },
            { value: 34, name: 'Nici' },
            { value: 37, name: 'Skóra' },

            { value: 39, name: 'Tekstylia' },
            { value: 43, name: 'Mięso' },
            { value: 49, name: 'Narzędzia' },
            { value: 40, name: 'Papier' },
            { value: 44, name: 'Pieczywo' },
            { value: 35, name: 'Mąka' },
            { value: 32, name: 'Ruda miedzi' },
            { value: 37, name: 'Kwarc' },

            { value: 46, name: 'Miedź' },
            { value: 48, name: 'Stal' },
            { value: 44, name: 'Obuwie' },
            { value: 48, name: 'Szkło' },
            { value: 48, name: 'Przewody' },
            { value: 58, name: 'Rury' },
            { value: 48, name: 'Opakowania' },
            { value: 59, name: 'Okna' },

            { value: 51, name: 'Blacha' },
            { value: 58, name: 'Krzem' },
            { value: 75, name: 'Jedzenie' },
            { value: 60, name: 'Ropa naftowa' },
            { value: 63, name: 'Żarówki' },
            { value: 75, name: 'Chemikalia' },
            { value: 73, name: 'Ubranie' },
            { value: 79, name: 'Stal nierdzewna' },

            { value: 62, name: 'Boksyt' },
            { value: 94, name: 'Maszyny' },
            { value: 80, name: 'Plastik' },
            { value: 72, name: 'Aluminium' },
            { value: 79, name: 'Ceramika' },
            { value: 77, name: 'Profile hutnicze' },
            { value: 90, name: 'Benzyna' },
            { value: 115, name: 'Samochody' },

            { value: 76, name: 'AGD' },
            { value: 145, name: 'Elektronika' },
            { value: 100, name: 'Zabawki' },
            { value: 120, name: 'Towary sportowe' },
            { value: 112, name: 'Ceramika sanitarna' },
        ];

        $scope.trains = 7;
        $scope.waggons = 13;
        $scope.timePerTrain = '6:54';
        $scope.goods = $scope.options[0].value;
        $scope.OnSubmit = function () {
            var fractialMinutes = convertTime($scope.timePerTrain);

            var profitFromLicense =
                $scope.goods // price per goods
                    * $scope.trains
                    * $scope.waggons
                    * 2 // days
                    * 24 // hours in day
                    * 60 / fractialMinutes; // minutes

            profitFromLicense = Math.round(profitFromLicense / 1000) * 1000;

            $scope.profitFromLicense = profitFromLicense;
        }

        function convertTime(str) {
            var parts = str.split(':');
            var minutes = parseInt(parts[0]);

            var seconds = parseInt(parts[1]);

            if (parts[1] === undefined)
                seconds = 0;

            var fractialMinutes = minutes + (seconds / 60);

            return fractialMinutes;
        }
    }

    angular
        .module('railNationTools')
        .controller('MainCtrl', MainCtrl);
})();