angular.module('Catleya', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'Catleya.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'home.html'});
});