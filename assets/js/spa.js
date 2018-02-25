      angular.module('onepage',[]);
      angular.module('onepage').controller('BaseCtrl', ['$scope', '$http', function ($scope, $http) {

      	$http.get('/registration').then(function(response){
      		scope.registrations=response.data;

      	});


      }]);
