'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ContactCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("data/cv.json")
        .success(function(data) {
            $scope.github    = data.github;
            $scope.linkedin  = data.linkedin;
            $scope.twitter   = data.twitter;
            $scope.mail      = data.mail;
            $scope.labelMail = data.labelMail;
        });
  });
