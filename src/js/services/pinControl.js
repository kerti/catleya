angular.module('Catleya')
.factory('PinControlService', ['$http', function($http) {
  return {
    setPin: function(pin, value) {
      return $http.put('api/pins/' + pin + '/' + value);
    }
  };
}]);