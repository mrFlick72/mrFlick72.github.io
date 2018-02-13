"use strict"

angular.module('home', ["commonService"])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            views: {
                'container@': {
                    templateUrl: 'dist/content/home/template/content.html',
                    controller: 'indexController'
                }
            }
        })
    }])
    .controller("indexController", ["$scope", "$http", function ($scope, $http) {
        $scope.init = function () {
            $http.get('dist/content/home/data/homeData.json').then(function (response) {
                $scope.section = response.data;
            });
        };
    }]);
