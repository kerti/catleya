angular.module('Catleya', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'Catleya.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'home.html'});
  $routeProvider.when('/switches', {templateUrl: 'switches.html'});
  $routeProvider.when('/timers', {templateUrl: 'timers.html'});
  $routeProvider.when('/devices', {templateUrl: 'devices.html'});
  $routeProvider.when('/help', {templateUrl: 'help.html'});
});