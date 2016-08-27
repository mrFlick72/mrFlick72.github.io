"use strict"

angular.module('home',["commonService"])
    .config(["$stateProvider" ,function($stateProvider) {
        $stateProvider.state('root.home', {
            url: '/',
            views: {
                'container@': {
                    templateUrl: 'content/home/template/content.html',
                    controller : 'indexController'
                }
            }
        })
    }])
    .controller("indexController", ["$scope", "$http", function($scope,$http) {
        $scope.init = function(){
            $http.get('content/home/data/homeData.json').success(function(data){
                $scope.section=data;
            });
        };
    }]);
