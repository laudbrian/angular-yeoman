'use strict';

/**
 * @ngdoc function
 * @name lauApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lauApp
 */
angular.module('lauApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
