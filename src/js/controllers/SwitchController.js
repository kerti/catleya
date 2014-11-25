angular.module('Catleya')
.controller('SwitchController', ['$scope', 'ConfigService', 'PinControlService', function($scope, ConfigService, PinControlService){
  $scope.overrideIndex = null;
  ConfigService.getActiveDevices().then(function (devices) {
    $scope.devices = devices;
  });
  $scope.toggleDevice = function (index) {
    var device = $scope.devices[index];
    if (null != device && undefined != device) {
      if (device.auto === true) {
        $scope.toggle('ovManualOverride', 'on');
        $scope.overrideIndex = index;
      } else {
        $scope.performToggle(device, index);
      }
    }
  }

  $scope.cancelOverride = function() {
    $scope.overrideIndex = null;
    $scope.toggle('ovManualOverride', 'off');
  }

  $scope.confirmOverride = function() {
    if (null != $scope.overrideIndex)  {
      var device = $scope.devices[$scope.overrideIndex];
      if (null != device && undefined != device) {
        device.auto = false;
        $scope.performToggle(device, $scope.overrideIndex);
      }
    }
    $scope.overrideIndex = null;
    $scope.toggle('ovManualOverride', 'off');
  }

  $scope.performToggle = function (device, index) {
    if (device.state === 'on') {
        device.state = 'off';
    } else if (device.state === 'off') {
        device.state = 'on';
    }
    ConfigService.putDevice(device, index);
  }
}]);