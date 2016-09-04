angular.module('aboutMe',["commonService"])
    .config(["$stateProvider", function($stateProvider) {
        $stateProvider
            .state('aboutMe', {
                url: '/aboutMe',
                views: {
                    'container@': {
                        templateUrl: 'dist/content/aboutMe/template/content.html',
                        controller:"aboutMeController"
                    }
                }
            });
    }])
    .controller("aboutMeController", ["$scope", function($scope) {
        $scope.init = function(){
            $scope.sectionContent='dist/content/aboutMe/data/content';

            $scope.bioContent='dist/content/aboutMe/data/bio/content';
            $scope.workContent='dist/content/aboutMe/data/work/content';
            $scope.musicContent='dist/content/aboutMe/data/music/content';
        };
    }]);
