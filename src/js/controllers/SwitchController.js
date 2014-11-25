angular.module('Catleya')
.controller('SwitchController', ['$scope', 'ConfigService', 'PinControlService', function($scope, ConfigService, PinControlService){
  
  $scope.initialize = function() {
    $scope.errorMessage = null;
    $scope.overrideIndex = null;
  };

  $scope.loadDevices = function () {
    ConfigService.getActiveDevices().then(function (result) {
      if (null === result.errorMessage) {
        $scope.devices = result.data;
      } else {
        $scope.errorMessage = result.errorMessage;
        $scope.showError();
      }
    });
  };

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
  };

  $scope.cancelOverride = function() {
    $scope.overrideIndex = null;
    $scope.toggle('ovManualOverride', 'off');
  };

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
  };

  $scope.performToggle = function (device, index) {
    if (device.state === 'on') {
        device.state = 'off';
    } else if (device.state === 'off') {
        device.state = 'on';
    }
    ConfigService.putDevice(device, index);
  };

  $scope.showError = function() {
    if (null != $scope.errorMessage) {
      $scope.toggle('ovErrorMessage', 'on');
    }
  };

  $scope.dismissError = function () {
    $scope.toggle('ovErrorMessage', 'off');
    $scope.errorMessage = null;
  };

  $scope.initialize();
  $scope.loadDevices();

}]);