"use strict"

angular.module('music',["commonService"])
    .config(["$stateProvider", function($stateProvider) {
        $stateProvider.state('root.music', {
            url: '/music',
            views: {
                'container@': {
                    templateUrl: 'content/music/template/content.html',
                    controller:"musicController"
                }
            }
        })
    }])
    .controller("musicController", ["$scope", function($scope) {
        $scope.init = function(){
            $scope.sectionContent='content/music/data/content';
        };
    }]);
