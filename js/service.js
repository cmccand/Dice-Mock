// var myApp = angular.module('myApp', []);

myApp.factory('Server', ['$http', function ($http) {
  return {
    get: function(url) {
      return $http.jsonp(url);
    }

  };
  .success(function (data, status, headers, config) {
    // See here, we are now assigning this username
    // to our existing model!
    $scope.user.username = json;
  })

}]);
