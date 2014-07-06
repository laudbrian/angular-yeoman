'use strict';

/**
 * @ngdoc function
 * @name lauApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lauApp
 */
angular.module('lauApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
