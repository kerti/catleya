angular.module('Catleya', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/switches', {
      templateUrl: 'switches.html',
      controller: 'SwitchController',
      resolve: {
      	getConfig: ['ConfigService', function(ConfigService) {
      		return ConfigService;
      	}],
        setPin: ['PinControlService', function(PinControlService) {
          return PinControlService;
        }]
      }
    })
    .when('/timers', {
      templateUrl: 'timers.html',
      controller: 'TimerController'
    })
    .when('/devices', {
      templateUrl: 'devices.html',
      controller: 'DeviceController'
    })
    .when('/help', {
      templateUrl: 'help.html',
      controller: 'HelpController'
    })
    .otherwise({
    	redirectTo: '/'
    });
}]);