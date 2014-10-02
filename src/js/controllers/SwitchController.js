angular.module('Catleya')
.controller('SwitchController', ['$scope', 'ConfigService', function($scope, ConfigService){
  $scope.config = ConfigService.get();
}]);