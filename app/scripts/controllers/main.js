'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("data/cv.json")
        .success(function(data) {
            $scope.name = data.firstname +" "+ data.lastname;
            $scope.photo = data.photo;
            $scope.studies = data.studies;
            $scope.pdfFile = data.pdfFile;
        });
  });
