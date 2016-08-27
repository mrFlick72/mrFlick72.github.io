"use strict"

angular.module('music',["commonService"])
    .config(["$stateProvider", function($stateProvider) {
        $stateProvider.state('root.music', {
            url: '/music',
            views: {
                'container@': {
                    templateUrl: 'dist/content/music/template/content.html',
                    controller:"musicController"
                }
            }
        })
    }])
    .controller("musicController", ["$scope", function($scope) {
        $scope.init = function(){
            $scope.sectionContent='dist/content/music/data/content';
        };
    }]);
