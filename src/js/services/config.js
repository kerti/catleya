angular.module('Catleya')
.factory('ConfigService', ['$http', function($http) {
  var configService = {
    getDevices: function() {
      var promise = $http
        .get('api/devices/')
        .then(function (response) {
          return response.data;
        });
      return promise;
    },
    getActiveDevices: function() {
      var promise = $http
        .get('api/devices/active')
        .then(function (response) {
          return response.data;
        });
      return promise;
    },
    putDevice: function (device, index) {
        var promise = $http
          .put('api/devices/' + index, device)
          .then(function (response) {
            return response.data;
          });
        return promise;
    }
  };
  return configService;
}]);