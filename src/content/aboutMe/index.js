angular.module('aboutMe',["commonService"])
    .config(["$stateProvider", function($stateProvider) {
        $stateProvider
            .state('root.aboutMe', {
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
        };
    }]);
