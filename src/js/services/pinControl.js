angular.module('Catleya')
.factory('PinControlService', ['$http', function($http) {
  return {
    setPin: function(pin, value) {
      return $http.get('api/pins/set/' + pin + '/' + value);
    }
  };
}]);