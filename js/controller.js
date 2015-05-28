var myApp = angular.module('myApp', []);
//
// myApp.controller('MainCtrl', ['$scope', 'Server', function ($scope, Server) {
//   var jsonGet = 'http://dice.services/shared/get.json';
//
//   Server.get(jsonGet);
//
//   $scope.user = {};
//
//   // Initiate a model as an empty string
//   $scope.user.username = '';
//
//
//
// }]);

myApp.controller('MainCtrl', ['$scope','$http', function ($scope, $http) {

  // create a user Object
  $scope.dealer = {};

  // Initiate a model as an empty string
  $scope.dealer.name = '';

  $http({
    method: 'JSONP',
    url: 'http://dice.services/shared/get.json'
  })
  .success(function (data, status, headers, config) {
    // $scope.user.dealer = json.dealer.name;
    console.log(data);

  })
  .error(function (data, status, headers, config) {
    // something went wrong :(
  });
}]);
