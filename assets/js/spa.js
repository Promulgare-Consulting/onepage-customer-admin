      angular.module('onepage',[]);
      angular.module('onepage').controller('BaseCtrl', ['$scope', function ($scope) {
        $scope.registration = [{
          id: 123456,
          name: 'Dave McKay',
          address1: ' 123 Main St',
          address2: '',
          city: 'Toronto',
          prov: 'Ontario',
          postal: 'M5R 3E8',
          country: 'Canada',
          phone: '647-504-7873',
          ethaccount: 'A64E8870',
          email: 'dave@promulgareconsulting.com',
          pictureid: 'A7E',
          investknowldge: 'yes'

        }];

      }]);
