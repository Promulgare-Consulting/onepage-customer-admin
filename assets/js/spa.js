      angular.module('onepage',[]);
      angular.module('onepage').controller('BaseCtrl', ['$scope', function ($scope) {
        $scope.things = [{
          id: 123456,
          name: 'foo'
        }];

      }]);
