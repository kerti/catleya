angular.module('Catleya')
.factory('ConfigService', ['$http', function($http) {
  var configService = {
    getDevices: function() {
      var promise = $http
        .get('api/devices/')
        .then(
          function (response) {
            return {
              "data": response.data,
              "status": response.status,
              "statusText": response.statusText,
              "errorMessage": null
            };
          }, function (error) {
            return {
              "data": null,
              "status": error.status,
              "statusText": error.statusText,
              "errorMessage": error.statusText
            };
          });
      return promise;
    },
    getActiveDevices: function() {
      var promise = $http
        .get('api/devices/active')
        .then(
          function (response) {
            return {
              "data": response.data,
              "status": response.status,
              "statusText": response.statusText,
              "errorMessage": null
            };
          }, function (error) {
            return {
              "data": null,
              "status": error.status,
              "statusText": error.statusText,
              "errorMessage": error.statusText
            };
          });
      return promise;
    },
    putDevice: function (device, index) {
        var promise = $http
          .put('api/devices/' + index, device)
          .then(
            function (response) {
              return {
                "data": response.data,
                "status": response.status,
                "statusText": response.statusText,
                "errorMessage": null
              };
            }, function (error) {
              return {
                "data": null,
                "status": error.status,
                "statusText": error.statusText,
                "errorMessage": error.statusText
              };
            });
        return promise;
    }
  };
  return configService;
}]);