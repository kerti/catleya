angular.module('Catleya')
.controller('SwitchController', ['$scope', 'ConfigService', 'PinControlService', function($scope, ConfigService, PinControlService){
  $scope.config = ConfigService.get();
  PinControlService.setPin(17, 0);
}]);