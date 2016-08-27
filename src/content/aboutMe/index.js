angular.module('aboutMe',["commonService"])
    .config(["$stateProvider", function($stateProvider) {
        $stateProvider
            .state('root.aboutMe', {
                url: '/aboutMe',
                views: {
                    'container@': {
                        templateUrl: 'content/aboutMe/template/content.html',
                        controller:"aboutMeController"
                    }
                }
            });
    }])
    .controller("aboutMeController", ["$scope", function($scope) {
        $scope.init = function(){
            $scope.sectionContent='content/aboutMe/data/content';
        };
    }]);
