'use strict';

// Declare app level module which depends on views, and components
angular.module('pollApp', [
  'ngRoute',
  'pollApp.pollCreate',
  'pollApp.pollVote',
  'pollApp.pollResult'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/create'});
}]);
