angular.module('Catleya')
.controller('SwitchController', ['$scope', 'ConfigService', 'PinControlService', function($scope, ConfigService, PinControlService){
  ConfigService.getActiveDevices().then(function (devices) {
    $scope.devices = devices;
  });
  $scope.toggle = function (index) {
    var device = $scope.devices[index];
    if (device.state === 'on') {
        device.state = 'off';
    } else if (device.state === 'off') {
        device.state = 'on';
    }
    ConfigService.putDevice(device, index);
  }
}]);